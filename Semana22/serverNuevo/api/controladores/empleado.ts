import { Request, Response } from "express";
import { Empleado, Ventas } from '../config/sequelize';

export var empleado_controller = {
    getAll: (req: Request, res: Response) => {
        Empleado.findAll({
            include: [
                { model: Ventas }
            ]
        }).then((empleados: any) => {
            console.log("Empleados Obtenidos", empleados);
            empleados.forEach((empleado:any)=>{
                empleado.mostrarDatos();
            });
            res.status(200);
            res.send({
                success: true,
                message: 'Lista de Empleados',
                content: empleados
            });
        }).catch((error: any) => {
            console.log(error);
            res.status(404);
            res.send({
                success: false,
                message: 'Ha ocurrido un errro al obtener los datos',
                content: ''
            });
        })
    },
    create: (req: Request, res: Response) => {
        //obtengamos el rqu body
        console.log(req.body);
        Empleado.create(req.body).then((empleadoCreado) => {
            if (empleadoCreado) {
                let respuesta = {
                    sucess: true,
                    message: 'Usuario Creado',
                    content: empleadoCreado
                }
                res.status(201).send(respuesta);
            }
        }).catch((error: any) => {
            console.log("error al crear empleado", error);
            res.status(500).send("Ocurio un error");
        });
    },
    getById: (req: Request, res: Response) => {
        let { id_empleado } = req.params;
        Empleado.findByPk(id_empleado).then((empleado) => {
            if (empleado) {
                let respuesta = {
                    sucess: true,
                    message: "Empleado Encontrado",
                    content: empleado
                }
                res.status(200).send(respuesta)
            }
            else {
                let respuesta = {
                    sucess: false,
                    message: "Empleado no encontrado",
                    content: empleado
                }
                res.status(404).send(respuesta)
            }
        }).catch((error: any) => {
            console.log('Error al buscar por ID', error);
        })
    },
    DeleteById: (req: Request, res: Response) => {
        let { id_empleado } = req.params;
        Empleado.destroy({
            where: {
                emp_id: id_empleado
            }
        }).then((cantidad) => {
            if (cantidad > 0) {
                console.log("Cant", cantidad);
                let respuesta = {
                    sucess: true,
                    message: "Empleado Eliminado",
                    content: cantidad
                }
                res.status(200).send(respuesta)
            }
            else{
                let respuesta = {
                    sucess: true,
                    message: "No se ha eliminado",
                    content: cantidad
                }
                res.status(500).send(respuesta)
            }
        })
    },
    updateById:(req:Request,res:Response) =>{
        let {id_empleado} = req.params;
        //El contenido a actualizar que registro va actualzar

        Empleado.update(req.body,{
            where:{
                emp_id:id_empleado
            }
        }).then((cantidad:any)=>{
            if(cantidad>0)
            {
                let respuesta = {
                    sucess: true,
                    message: "Registro Actualizado",
                    content: cantidad
                }
                res.status(200).send(respuesta)
            }
            else
            {
                let respuesta = {
                    sucess: false,
                    message: "Registro no actualizado",
                    content: cantidad
                }
                res.status(400).send(respuesta)
            }
        })
    }
}
