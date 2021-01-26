const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Solicitations extends Model {
    static associate() {}
  }

  Solicitations.init(
    {
      posteddate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      originalposteddate: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      originalresponsedate: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      responsedate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      solicitationname: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      solicitationnumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      agency: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      office: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      contractingofficeaddress: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      officeaddresscity: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      officeaddressstate: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      officeaddresszip: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      noticetype: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      setaside: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      classificationcodedescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      naicscodedescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      classificationcode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      naicscode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      pointofcontactname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarypointofcontact: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarypointofcontactemail: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarypointofcontactphonenum: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      secondarypointofcontact: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      secondarypointofcontactemail: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      secondarypointofcontactphonenum: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      placeofperformance: {
        type: DataTypes.STRING(255),
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
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      psccode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      psccodedescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fsccode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fsccodedescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      created_at: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      agencylogo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      underscored: true,
      modelName: 'solicitations',
      timestamps: true,
    },
  );
  return Solicitations;
};
