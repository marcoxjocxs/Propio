import express from 'express';
import bodyParser from 'body-parser';

const app=express();

app.get('/api',(req,res)=>{
    console.log(req.query);
    //manejando peticiones
    res.status(201);
    //mandando la repsuesta
    res.send({
        "operation":"exito",
        "message":"Factura creada con exito"
    });
})

const port = 2000;

app.listen(port,() => console.log("Servidor corriendo en el puerto " + port));


