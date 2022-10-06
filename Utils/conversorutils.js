
const models = require('../Models/Response/modeloresponse');

const CriarModelRes = (modelReq, message, status, codigo) => {

    const usuarioRes = models.modeloRes();

    usuarioRes.codigo = codigo;
    usuarioRes.status = status;
    usuarioRes.mensagem = message;
    usuarioRes.dados.push(modelReq);

    return usuarioRes;
}

module.exports = { CriarModelRes };