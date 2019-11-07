import { Request, Response } from 'express'
import { Pabellon } from "./../configuracion/sequelize";
import { json } from 'sequelize/types';

export let GetPabellon = (req: Request, res: Response) => {
    Pabellon.findAll().then((objpabellones:any)=>{
        res.status(200).json({
            message:'ok',
            content:objpabellones
        })
    })
}

export let PostPabellon = (req: Request, res: Response) => {

    if (!req.body.pab_nom) {
        res.status(400).json(
            {
                ok: false,
                mensaje: "No se recibieron todos los campos en el request"
            }
        );
        return;
    }
    let objPabellon = Pabellon.build(req.body);
    objPabellon.save().then((objPabellonCreado: any) => {
        res.status(201).json(
            {
                ok: true,
                contenido: objPabellonCreado,
                mensaje: "Pabellon creado correctamente"
            }
        );
    }).catch((error: any) => {
        res.status(500).json(
            {
                ok: false,
                mensaje: "Error interno en el servidor",
                contenido:error
            }
        );
    })
}



