
const Sequelize = require('sequelize');
const conexaodb = new Sequelize('dbteste', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

/* conexaodb.authenticate().then(() => {

    console.log("O banco de dados foi conectado");
}).catch((err) => {

    console.log("Banco de dados não conectado. Motivo: " + err);
}) */

module.exports = { Sequelize, conexaodb };