
const models = require('../Models/Response/usuarioresponse');

const usuarioRes = (modelReq, message, status, codigo) => {

    const usuarioRes = models.modeloUsuarioRes();

    usuarioRes.codigo = codigo;
    usuarioRes.status = status;
    usuarioRes.mensagem = message;
    usuarioRes.dados.push(modelReq);

    return usuarioRes;
}

module.exports = { usuarioRes };