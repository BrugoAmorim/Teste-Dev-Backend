
const tbUsuarios = require('../Models/usuarios').tbUsuarios;

const buscarUsuarios = async () => {

    const Usuarios = await tbUsuarios.findAll({});
    return Usuarios;
}

const inserirUsuario = async (req) => {

    const salvar = await tbUsuarios.create({
        nome: req.Nome,
        sobrenome: req.Sobrenome,
        email: req.Email,
        telefone: req.Telefone,
        cpf: req.Cpf
    });

    return salvar;
}

const buscarEmail = async (emailusuario) => {

    const usuario = await tbUsuarios.findOne({ where: { email: emailusuario }});
    return usuario;
}

const buscarCpf = async (cpfusuario) => {

    const cpfFormatado = cpfusuario.split(".").join("").replace("-", "");

    const buscarUsuarios = await tbUsuarios.findAll({});
    buscarUsuarios.map((data) => {

        const cpfUser = data.cpf.split(".").join("").replace("-", "");
        if(cpfUser === cpfFormatado)
            return data;
    });
}

const buscarUsuarioId = async (idusuario) => {

    const user = await tbUsuarios.findOne({ where: { id_usuario: idusuario }});
    return user;
}

const apagarUsuario = async (idUsuario) => {

    await tbUsuarios.destroy({ where: { id_usuario: idUsuario }});
}

const salvarAlteracoesUsuario = async (idusuario, usuariobody) => {

    await tbUsuarios.update({
        nome: usuariobody.Nome,
        sobrenome: usuariobody.Sobrenome,
        email: usuariobody.Email,
        telefone: usuariobody.Telefone,
        cpf: usuariobody.Cpf
    }, 
    {
        where: { id_usuario: idusuario }
    });
}

module.exports = { buscarUsuarios, inserirUsuario, buscarEmail, buscarCpf, buscarUsuarioId, apagarUsuario, salvarAlteracoesUsuario };