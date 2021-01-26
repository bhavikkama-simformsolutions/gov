const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'sl_solicitations',
    {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      solicitationnumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      solicitationname: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      agency: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      posteddate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      responsedate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      eventstatus: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      eventtype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      purchasetype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      categorytype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      governmenttype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      primarypointofcontact: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      primarypointofcontactemail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      primarypointofcontactphonenum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      classificationcode: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      classificationcodedescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      attachmentslinks: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      solicitationlink: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      solicitationsource: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      lastupdated: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      agencylogo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      originalposteddate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      originalresponsedate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      office: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contractingofficeaddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      officeaddresscity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      officeaddressstate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      officeaddresszip: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      noticetype: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondarypointofcontact: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondarypointofcontactemail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      secondarypointofcontactphonenum: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      placeofperformance: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      search_tokens: {
        type: 'TSVECTOR',
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'sl_solicitations',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'sl_solicitations_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );
};
