import { Request, Response } from 'express'
import { Pabellon } from "./../configuracion/sequelize";
import { json } from 'sequelize/types';
import { Aula, TipoAula } from '../configuracion/sequelize';

export let GetPabellon = (req: Request, res: Response) => {
    Pabellon.findAll().then((objpabellones: any) => {
        res.status(200).json({
            message: 'ok',
            content: objpabellones
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
                contenido: error
            }
        );
    })
}

export let GetPabellonesById = (req: Request, res: Response) => {
    Pabellon.findByPk(req.params.id).then((objPabellon: any) => {
        if (objPabellon) {
            res.status(200).json({
                message: 'ok',
                pabellon: objPabellon
            })
        }
        else {
            res.status(500).json({
                message: 'error',
                content: 'No se encontro el pabellon'
            })
        }
    })
}


export let updatePabellon = (req: Request, res: Response) => {
    Pabellon.update(
        {
            pab_nom: req.body.pabellon.pab_nom
        },
        {
            where: {
                pab_id: req.body.pabellon.pab_id
            }
        }).then((pabActualizada: any) => {
            Pabellon.findByPk(pabActualizada[0]).then((objpabellon: any) => {
                res.status(200).json({
                    message: 'ok',
                    content: objpabellon
                })
            })
        }).catch((error: any) => {
            res.status(501).json({
                message: 'error',
                content: error
            })
        })
}


export let getAulasXPabellones = (req: Request, res: Response) => {
    Pabellon.findAll({
        include:[{
            model:Aula
        }]
    }).then((resultado:any) => {
        res.status(200).json({
            message: 'ok',
            content: resultado
        })
    })
}

export let getAulasByPabellonId = (req: Request, res: Response) => {
    Pabellon.findAll({
        where:{
            pab_id:req.params.id
        },
        include:[{
            model:Aula,
            include:[{
                model:TipoAula
            }]
        }]
    }).then((resultado:any) => {
        res.status(200).json({
            message: 'ok',
            content: resultado
        })
    })
}