
const dataType = require('./db').Sequelize;
const conexaodb = require('./db').conexaodb;

const tbUsuarios = require('./usuarios').tbUsuarios;

const tbEnderecosUsuarios = conexaodb.define('enderecos_usuarios', {

    id_endereco_usuario: {
        type: dataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_usuario: {
        type: dataType.INTEGER
    },
    logradouro: {
        type: dataType.STRING(255),
        allowNull: false
    },
    numero: {
        type: dataType.STRING(45),
        allowNull: false
    },
    cidade: {
        type: dataType.STRING(255),
        allowNull: false
    },
    uf: {
        type: dataType.STRING(2),
        allowNull: false
    },
    cep: {
        type: dataType.STRING(45),
        allowNull: false
    },
    bairro: {
        type: dataType.STRING(255),
        allowNull: false
    },
    complemento: {
        type: dataType.TEXT,
        allowNull: true
    }
}, { timestamps: false });

tbEnderecosUsuarios.sync({ extends: true });
tbUsuarios.hasOne(tbEnderecosUsuarios, { foreignKey: "id_usuario" });

module.exports = { tbEnderecosUsuarios };