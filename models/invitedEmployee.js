const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class invitedEmployee extends Model {
    static associate(model) {
      invitedEmployee.belongsTo(model.user, {
        as: 'invitedBy',
        foreignKey: 'userId',
      });
      invitedEmployee.belongsTo(model.company, {
        as: 'companyInfo',
        foreignKey: 'companyId',
      });
    }
  }
  invitedEmployee.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      firstname: { type: DataTypes.STRING, allowNull: false },
      lastname: { type: DataTypes.STRING, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      companyId: { type: DataTypes.INTEGER, allowNull: false },
      inviteCode: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'invitedEmployee',
      underscored: true,
      timestamps: true,
    }
  );
  return invitedEmployee;
};
