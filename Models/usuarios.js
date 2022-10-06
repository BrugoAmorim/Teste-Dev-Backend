
const dataType = require('./db').Sequelize;
const conexaodb = require('./db').conexaodb;

const tbUsuarios = conexaodb.define('usuarios', {

    id_usuario: {
        type: dataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: dataType.STRING(255),
        allowNull: false
    },
    sobrenome: {
        type: dataType.STRING(255),
        allowNull: false
    },
    email: {
        type: dataType.STRING(255),
        allowNull: false
    },
    telefone: {
        type: dataType.STRING(45),
        allowNull: false
    },
    cpf: {
        type: dataType.STRING(45),
        allowNull: false
    }
}, { timestamps: false });

tbUsuarios.sync({ alter: true });

module.exports = { tbUsuarios };