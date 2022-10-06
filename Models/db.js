
const Sequelize = require('sequelize');
const conexaodb = new Sequelize($BANCODEDADOS, $USUARIO, $SENHA, {
    host: 'localhost',
    dialect: 'mysql'
});

/* conexaodb.authenticate().then(() => {

    console.log("O banco de dados foi conectado");
}).catch((err) => {

    console.log("Banco de dados não conectado. Motivo: " + err);
}) */

module.exports = { Sequelize, conexaodb };
