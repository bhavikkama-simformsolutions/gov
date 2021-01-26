const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(model) {
      Company.hasMany(model.user);
      Company.hasMany(model.invitedEmployee);
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  Company.init(
    {
      activationdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      active_dialog: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      additionalnaicscodes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      additionalpsccodes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      addressline1: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      addressline2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      businessstartdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      businesswebsite: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cagecode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      capabilities: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      capabilitiesstatement: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      certified8a: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      clientcompanyviewable: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      companycertifications: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      companydescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      companyheadquarterstate: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      companyinfo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      companylegalname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      companylogo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      companyprimaryindustry: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      congressionaldistrict: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      contractinginfo: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      corporatestructurename: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      county: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      datasource: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      defensecontractor: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      doingbusinessasname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      dunsnumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      emailaddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      excid: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      exporter: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      faxnumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      fedcontractor: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      fedcontractortype: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      federalcongressionaldistrict: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      federalcongressionaldistrictnumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      firstname: {
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
      gsaschedulenumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      hubzone: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      internationaltrade: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      jobtitle: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      minorityowned: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      notes: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      opearetinregion: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      other_emailaddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      otherinfo: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      phonenumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarynaicscode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarynaicscodedescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarypsccode: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primarypsccodedescription: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      primecontractor: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      profilesubmissiondate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      profilesubmitted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      registrationdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      rejected: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      securityclearance: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      servicerelateddisabledveteranowned: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      smallbusiness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      specialties: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      specialtiesexported: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      stateofincorporation: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      staterepresentativedistrict: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      staterepresentativedistrictnumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      statesenatedistrict: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      statesenatedistrictnumber: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      statusmessage: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      streetaddress: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      subcontractor: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      submitby: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      submitdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      submitted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      verifiedby: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      verifieddate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      veteranowned: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      wia_region: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      womanowned: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      womanownedsmallbusiness: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      yearsinbusiness: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      zip: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      expirationdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      profitstructure: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      registration_purpose: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      businessdivisionname: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      businessdivisionnumber: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      far_report: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      far_dfar_report: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      entitylink: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'company',
    }
  );
  return Company;
};
