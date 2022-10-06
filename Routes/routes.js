
const myapp = require('../server').myapp;

const usuarioController = require('../Controllers/usuariocontroller');

myapp.get('/usuarios', usuarioController.buscarUsuarios);

myapp.get('/usuarios/:id_usuario', usuarioController.buscarUsuarioId);

myapp.post('/usuarios', usuarioController.novoUsuario);

myapp.delete('/usuarios/:id_usuario', usuarioController.removerUsuario);

myapp.put('/usuarios/:id_usuario', usuarioController.editarUsuario);