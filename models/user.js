const { Model } = require('sequelize');
const { ROLE } = require('../constants/common');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.role, { as: 'role' });
      User.belongsTo(models.company, {
        as: 'company',
      });
      User.hasMany(models.userOtp, {
        as: 'otps',
      });
      User.hasMany(models.invitedEmployee);
    }
  }
  User.init(
    {
      firebase_uid: { type: DataTypes.STRING, allowNull: false },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      isEmailVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: ROLE.COMPANY_MEMBER,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'user',
      underscored: true,
      timestamps: true,
    }
  );

  return User;
};
