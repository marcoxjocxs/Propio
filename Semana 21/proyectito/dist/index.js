"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/api', (req, res) => {
    console.log(req.query);
    //manejando peticiones
    res.status(201);
    //mandando la repsuesta
    res.send({
        "operation": "exito",
        "message": "Factura creada con exito"
    });
});
const port = 2000;
app.listen(port, () => console.log("Servidor corriendo en el puerto " + port));
