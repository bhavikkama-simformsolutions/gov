const { Model } = require('sequelize');
const { ROLE } = require('../constants/common');

const roleArray = Object.keys(ROLE).map((item) => ({
  id: ROLE[item],
  name: item
    .split('_')
    .map((word) => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
    .join(' '),
}));
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.user);
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'role',
    }
  );
  Role.seed = () => {
    Role.count().then((count) => {
      if (Number(count) === 0) {
        Role.bulkCreate(roleArray).then(() => console.log('Roles Seeded'));
      }
    });
  };
  return Role;
};
