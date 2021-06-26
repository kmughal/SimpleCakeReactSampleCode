const { DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const CakeModel = sequelize.define(
  "CakeModel",
  {
    name: {
      field: "col_name",
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment: {
      field: "col_comment",
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      field: "col_image_url",
      type: DataTypes.STRING,
      allowNull: false,
    },
    yumFactor: {
      field: "col_yum_factor",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "tbl_cake" }
);
exports.CakeModel = CakeModel;
