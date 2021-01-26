var DataTypes = require("sequelize").DataTypes;
var _companies = require("./companies");
var _dod_awards_daily = require("./dod_awards_daily");
var _sl_solicitations = require("./sl_solicitations");
var _solicitations = require("./solicitations");

function initModels(sequelize) {
  var companies = _companies(sequelize, DataTypes);
  var dod_awards_daily = _dod_awards_daily(sequelize, DataTypes);
  var sl_solicitations = _sl_solicitations(sequelize, DataTypes);
  var solicitations = _solicitations(sequelize, DataTypes);


  return {
    companies,
    dod_awards_daily,
    sl_solicitations,
    solicitations,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
