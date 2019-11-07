import { Router } from 'express';
import * as usuario_controlador from '../controladores/usuario';
export let usuario_router = Router();
usuario_router.post('/usuario',usuario_controlador.crearUsuario);
usuario_router.post('/usuario/find',usuario_controlador.encontrarUsuarioVyNomOApe);
usuario_router.post('/usuario/loggin',usuario_controlador.iniciarSesion);
