
const tbEnderecosUsuarios = require('../Models/enderecosusuarios').tbEnderecosUsuarios;

const listarEnderecos = async () => {

    const enderecos = await tbEnderecosUsuarios.findAll({});
    return enderecos;
}

const salvarEndereco = async (req) => {

    const data = await tbEnderecosUsuarios.create({
        id_usuario: req.id_usuario,
        logradouro: req.logradouro,
        numero: req.numero,
        cidade: req.cidade,
        uf: req.uf,
        cep: req.cep,
        bairro: req.bairro,
        complemento: req.complemento
    });

    return data;
}

const excluirEndereco = async (idendereco) => {

    await tbEnderecosUsuarios.destroy({ where: { id_endereco_usuario: idendereco }});
}

const atualizarEndereco = async (req, idenderecousuario) => {

    await tbEnderecosUsuarios.update({
        logradouro: req.logradouro,
        numero: req.numero,
        cidade: req.cidade,
        uf: req.uf,
        cep: req.cep,
        bairro: req.bairro,
        complemento: req.complemento 
    }, 
    {
        where: { id_endereco_usuario: idenderecousuario }
    })
}

const filtrarEnderecoId = async (idenderecousuario) => {

    const endereco = await tbEnderecosUsuarios.findOne({ where: { id_endereco_usuario: idenderecousuario }});
    return endereco
}

module.exports = { listarEnderecos, salvarEndereco, excluirEndereco, atualizarEndereco, filtrarEnderecoId };