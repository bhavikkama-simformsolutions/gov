const { Model } = require('sequelize');
const { OTPTYPE } = require('../constants/common');

module.exports = (sequelize, DataTypes) => {
  class UserOtp extends Model {
    static associate(models) {
      UserOtp.belongsTo(models.user, { as: 'user' });
    }
  }

  UserOtp.init(
    {
      userId: DataTypes.INTEGER,
      otp: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM(),
        values: Object.keys(OTPTYPE).map((item) => OTPTYPE[item]),
      },
    },
    {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'userOtp',
    }
  );
  return UserOtp;
};
