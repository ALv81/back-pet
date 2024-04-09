const { DataTypes } = require("sequelize");
const { DB } = require("../config/database");


const Pet = DB.define("pet", {
    id : {
        primaryKey: true,
        autoIncrement: true,
        allowNull : false,
        type: DataTypes.INTEGER
    },
   name:{
    type: DataTypes.STRING,
    allowNull: false,
   },
   age: {
    type: DataTypes.INTEGER,
    allowNull: false,
   },
   sex:{
    type: DataTypes.STRING,
    allowNull: false
   },
   size: {
    type: DataTypes.STRING,
   },
   image:{
    type: DataTypes.STRING,
   }
})

module.exports = Pet