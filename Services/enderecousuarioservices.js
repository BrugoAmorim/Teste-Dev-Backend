
const databaseEnderecos = require('../Database/enderecousuariodatabase');
const databaseUsuarios = require('../Database/usuariodatabase');

const utils = require('../Utils/conversorutils');

function validarCamposVazios(req){
    
    if(req.logradouro.length == 0)
        throw new Error("O campo Logradouro é obrigatório");    

    if(req.numero.length == 0)
        throw new Error("O campo Numero é obrigatório");
    
    if(req.cidade.length == 0)
        throw new Error("O campo Cidade é obrigatório");
    
    if(req.uf.length == 0)
        throw new Error("O campo Uf é obrigatório");

    if(req.cep.length == 0)
        throw new Error("O campo Cep é obrigatório");

    if(req.bairro.length == 0)
        throw new Error("O campo Bairro é obrigatório");
}

const validarEnderecos = async (idusuario) => {

    const infoUsuario = await databaseUsuarios.buscarUsuarioId(idusuario);

    if(infoUsuario === null)
            throw new Error("Este usuário não existe");

    const enderecosRegistrados = await databaseEnderecos.listarEnderecos();
    const filtrarEnderecos = enderecosRegistrados.filter(x => x.id_usuario == idusuario);

    if(filtrarEnderecos.length === 0)
        throw new Error("Este usuário não possui endereçõs registrados");

    const caixoteRes = utils.CriarModelRes(filtrarEnderecos, "Endereços retornados com sucesso", "sucesso", 200);
    return caixoteRes;
}

const validarNovoEndereco = async (req) => {

    const usuario = await databaseUsuarios.buscarUsuarioId(req.id_usuario);

    if(usuario === null)
        throw new Error("o Usuário não foi encontrado");
    
    validarCamposVazios(req);
    
    const enderecoSalvo = await databaseEnderecos.salvarEndereco(req);
    const modelRes = utils.CriarModelRes(enderecoSalvo, "Endereço salvo com sucesso", "sucesso", 200);
    return modelRes;
}

const validarFiltroEndereco = async (idenderecousuario) => {

    const filtrarEndereco = await databaseEnderecos.filtrarEnderecoId(idenderecousuario);

    if(filtrarEndereco === null)
        throw new Error("Nenhum endereço foi encontrado");

    const caixoteRes = utils.CriarModelRes(filtrarEndereco, "Endereco retornado com sucesso", "sucesso", 200);
    return caixoteRes;
}

const validarExcluirEndereco = async (idenderecousuario) => {

    const enderecosusuario = await databaseEnderecos.listarEnderecos();
    const filtrarEndereco = enderecosusuario.filter(x => x.id_endereco_usuario == idenderecousuario);

    if(filtrarEndereco.length === 0)
        throw new Error("Este endereço não foi encontrado");

    await databaseEnderecos.excluirEndereco(idenderecousuario);
    return utils.CriarModelRes({}, "Endereço removido com sucesso", "sucesso", 200);
}

const validarEdicaoEndereco = async (form, idenderecousuario) => {

    const usuario = await databaseUsuarios.buscarUsuarioId(form.id_usuario);
    const endereco = await databaseEnderecos.filtrarEnderecoId(idenderecousuario);

    if(usuario === null)
        throw new Error("o Usuário não foi encontrado");
        
    if(endereco === null)
        throw new Error("O registro deste endereço não foi encontrado");

    if(endereco.id_usuario !== form.id_usuario)
        throw new Error("Este endereço não pertence a você");

    validarCamposVazios(form); 
        
    await databaseEnderecos.atualizarEndereco(form, idenderecousuario);
    const enderecoAtualizado = await databaseEnderecos.filtrarEnderecoId(idenderecousuario);

    return utils.CriarModelRes(enderecoAtualizado, "O endereço foi atualizado com sucesso", "sucesso", 200);
}

module.exports = { validarEnderecos, validarNovoEndereco, validarFiltroEndereco, validarExcluirEndereco, validarEdicaoEndereco };