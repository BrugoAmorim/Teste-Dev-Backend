
const myapp = require('../server').myapp;

const usuarioController = require('../Controllers/usuariocontroller');
const enderecosController = require('../Controllers/enderecousuariocontroller');

// Rotas usuarios

myapp.get('/usuarios', usuarioController.buscarUsuarios);

myapp.get('/usuarios/:id_usuario', usuarioController.buscarUsuarioId);

myapp.post('/usuarios', usuarioController.novoUsuario);

myapp.delete('/usuarios/:id_usuario', usuarioController.removerUsuario);

myapp.put('/usuarios/:id_usuario', usuarioController.editarUsuario);

// Rotas enderecos-usuarios

myapp.get('/enderecos-usuario/:id_usuario', enderecosController.buscarEnderecosUsuarioId);

//preciso arrumar
myapp.get('/endereco-usuario/:id_endereco_usuario', enderecosController.filtrarEnderecoUsuarioId);

myapp.post('/enderecos-usuario', enderecosController.inserirEnderecoUsuario);

myapp.delete('/enderecos-usuario/:id_endereco_usuario', enderecosController.deletarEnderecoUsuarioId );

myapp.put('/enderecos-usuario/:id_endereco_usuario', enderecosController.editarEnderecoUsuario);