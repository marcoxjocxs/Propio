import { conexion } from './../configuracion/sequelize';
import express, { Request, Response } from 'express';
import { pabellon_router } from '../rutas/pabellon';
import bodyParser from 'body-parser';
const swaggerUi = require('swagger-ui-express');
import * as swaggerDocument from './../apidocs/swagger.json';
import { aulas_router } from '../rutas/Aulas';
import { usuario_router } from '../rutas/Usuario';

export class Server {
  public app: express.Application;
  public puerto: any;
  constructor() {
    this.app = express();
    // obtener el puerto que nos asignará heroku
    // o establer por defecto el puerto 3000
    this.puerto = process.env.PORT || 5000;
    this.HabilitarCORS();
    this.configurarBodyParser();
    this.configurarRutas();
  }
  HabilitarCORS() {
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });
  }

  configurarBodyParser() {
    this.app.use(bodyParser.json());
  }

  configurarRutas() {
    // configurando una ruta por defecto o de prueba
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send("BIENVENIDO AL SERVIDOR");
    });
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.app.use('/api', pabellon_router);
    this.app.use('/api', aulas_router);
    this.app.use('/api', usuario_router);
  }

  start() {
    this.app.listen(this.puerto, () => {
      console.log(`Servidor OK en el puerto ${this.puerto}`);
      // force:true, elimina todas las tablas y las crea nuevamente
      // force:false, si las tablas no existen en la base de datos
      // las crea. Si las tablas ya existían en la base de datos
      // sólo crea las nuevas tablas en caso de que hubieran
      conexion.sync({ force: false }).then(() => {
        console.log("Base de datos creada correctamente");
      })
    });
  }

}