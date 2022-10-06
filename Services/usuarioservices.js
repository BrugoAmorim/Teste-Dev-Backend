
const utils = require('../Utils/usuarioutils');
const database = require('../Database/usuariodatabase');

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const BuscarUsuarios = (Usuarios) => {

    if(Usuarios.length === 0)
        throw new Error("Não há usuários registrados");

    const caixoteRes = utils.usuarioRes(Usuarios, "Usuários retornados com sucesso", "sucesso", 200);
    return caixoteRes;
}

const NovoUsuario = async (req) => {

    if(req.Nome.length === 0)
        throw new Error("o campo Nome é obrigatório");

    if(req.Sobrenome.length === 0)
    throw new Error("o campo Sobrenome é obrigatório");
    
    if(req.Email.length === 0)
        throw new Error("o campo Email é obrigatório");

    if(req.Telefone.length === 0)
        throw new Error("o campo Telefone é obrigatório");

    if(req.Cpf.length === 0)
        throw new Error("o campo Cpf é obrigatório");

    if(await database.buscarEmail(req.Email) != null)
        throw new Error("este Email já esta sendo utilizado");

    if(validarEmail(req.Email) == false)
        throw new Error("este Email é inválido");

    if(await database.buscarCpf(req.Cpf) != null)
        throw new Error("o Cpf informado já esta sendo utilizado");

    const usuariosalvo = await database.inserirUsuario(req);
    const caixoteRes = utils.usuarioRes(usuariosalvo, "Usuário registrado", "sucesso", 200);
    return caixoteRes;
}

const ExcluirUsuario = async (idusuario) => {

    const Usuario = await database.buscarUsuarioId(idusuario);

    if(Usuario === null)
        throw new Error("Usuário não encontrado");

    await database.apagarUsuario(idusuario);

    const modelsRes = utils.usuarioRes({}, "Usuário removido", "sucesso", 200);
    return modelsRes;
}

const EditarUsuario = async (idusuario, req) => {

    const listaUsuarios = await database.buscarUsuarios();
    const validarUser = await database.buscarUsuarioId(idusuario);

    if(validarUser === null)
        throw new Error("Usuário não encontrado");

    if(req.Nome.length === 0)
        throw new Error("o campo Nome é obrigatório");

    if(req.Sobrenome.length === 0)
    throw new Error("o campo Sobrenome é obrigatório");
    
    if(req.Email.length === 0)
        throw new Error("o campo Email é obrigatório");

    if(req.Telefone.length === 0)
        throw new Error("o campo Telefone é obrigatório");

    if(req.Cpf.length === 0)
        throw new Error("o campo Cpf é obrigatório");

    if(validarEmail(req.Email) === false)
        throw new Error("este Email é inválido");

    if(listaUsuarios.filter(x => x.email === req.Email && x.id_usuario != idusuario).length > 0)
        throw new Error("este Email já esta sendo utilizado");

    const CpfUsuario = req.Cpf.split(".").join("").replace("-", "");
    const getcpf = listaUsuarios.filter(x => x.cpf.split(".").join("").replace("-", "") == CpfUsuario && x.id_usuario != idusuario);

    if(getcpf.length > 0)
        throw new Error("o Cpf informado já esta sendo utilizado");

    await database.salvarAlteracoesUsuario(idusuario, req);
    const infoatualizadas = await database.buscarUsuarioId(idusuario);

    const caixoteRes = utils.usuarioRes(infoatualizadas, "Informações alteradas com sucesso", "sucesso", 200);
    return caixoteRes;
}

const FiltrarUsuarioId = async (idusuario) => {

    const user = await database.buscarUsuarioId(idusuario);

    if(user === null)
        throw new Error("Este usuário não foi encotrado");

    const caixoteRes = utils.usuarioRes(user, "Usuário encontrado com sucesso", "sucesso", 200);
    return caixoteRes;
}

module.exports = { NovoUsuario, BuscarUsuarios, ExcluirUsuario, EditarUsuario, FiltrarUsuarioId };