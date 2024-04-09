const { Sequelize } = require('sequelize');

const DB = new Sequelize({
    dialect: 'postgres',
    host : 'localhost',
    username : 'postgres',
    password : '1234',
    database : 'pet',
    logging : false
})

module.exports = {DB}