
const validacoes = require('../Services/usuarioservices');
const database = require('../Database/usuariodatabase');
const utils = require('../Utils/conversorutils');

const buscarUsuarios = async (req, res) => {

    try{
        const usuarios = await database.buscarUsuarios();
        const UsuarioRes = validacoes.BuscarUsuarios(usuarios);

        return res.status(200).json(UsuarioRes);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.body, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const novoUsuario = async (req, res) => {

    try{
        const formUsuario = { Nome, Sobrenome, Email, Telefone, Cpf } = req.body;
        const UsuarioRes = await validacoes.NovoUsuario(formUsuario);

        return res.status(200).json(UsuarioRes);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.body, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const removerUsuario = async (req, res) => {

    try{
        const { id_usuario } = req.params;
        const caixoteRes = await validacoes.ExcluirUsuario(id_usuario);

        return res.status(200).json(caixoteRes);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.params, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const editarUsuario = async (req, res) => {

    try{
        const { id_usuario } = req.params;
        const UsuarioRes = await validacoes.EditarUsuario(id_usuario, req.body);

        return res.status(200).json(UsuarioRes);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.body, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const buscarUsuarioId = async (req, res) => {

    try{
        const { id_usuario } = req.params;

        const usuario = await validacoes.FiltrarUsuarioId(id_usuario);
        return res.status(200).json(usuario);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes({}, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = { novoUsuario, buscarUsuarios, removerUsuario, editarUsuario, buscarUsuarioId };