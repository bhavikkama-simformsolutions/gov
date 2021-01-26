const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dod_awards_daily', {
    contractdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dodbranch: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contractdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    companylegalname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dollarvalue: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    awardlink: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'dod_awards_daily',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "dod_awards_daily_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
