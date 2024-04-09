const { DataTypes } = require("sequelize");
const { DB } = require("../config/database");


const User = DB.define("user", {
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
   lastName:{
    type: DataTypes.STRING,
    allowNull: false,
   },
   email:{
    type: DataTypes.STRING,
    allowNull: false,
    unique : true,
   },
   role:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
   },
   password:{
    type: DataTypes.STRING,
    allowNull: false,
   },
   phone:{
    type: DataTypes.STRING,
    allowNull: false,
   }
})

module.exports = User