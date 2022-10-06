
const validacoes = require('../Services/enderecousuarioservices');
const utils = require('../Utils/conversorutils');

const buscarEnderecosUsuarioId = async (req, res) => {

    try{
        const { id_usuario } = req.params;

        const EnderecosRegistrados = await validacoes.validarEnderecos(id_usuario);
        return res.status(200).json(EnderecosRegistrados);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.params, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const inserirEnderecoUsuario = async (req, res) => {

    try{
        const form = { id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento } = req.body;
        const enderecoSalvo = await validacoes.validarNovoEndereco(form);

        return res.status(200).json(enderecoSalvo);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.body, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const filtrarEnderecoUsuarioId = async (req, res) => {

    try{
        const { id_endereco_usuario } = req.params;
        const EnderecoUsuario = await validacoes.validarFiltroEndereco(id_endereco_usuario);

        return res.status(200).json(EnderecoUsuario);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.params, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const deletarEnderecoUsuarioId = async (req, res) => {

    try{
        const { id_endereco_usuario } = req.params;
        const ModelRes = await validacoes.validarExcluirEndereco(id_endereco_usuario);

        return res.status(200).json(ModelRes);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.params, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

const editarEnderecoUsuario = async (req, res) => {

    try{
        const form = { id_usuario, logradouro, numero, cidade, uf, cep, bairro, complemento } = req.body;
        const { id_endereco_usuario } = req.params;

        const EnderecoAtualizado = await validacoes.validarEdicaoEndereco(form, id_endereco_usuario);    

        return res.status(200).json(EnderecoAtualizado);
    }
    catch(err){

        const ErrorResponse = utils.CriarModelRes(req.body, err.message, "falha na requisição", 400);
        return res.status(400).json(ErrorResponse);
    }
}

module.exports = { buscarEnderecosUsuarioId, inserirEnderecoUsuario, filtrarEnderecoUsuarioId , deletarEnderecoUsuarioId, editarEnderecoUsuario };