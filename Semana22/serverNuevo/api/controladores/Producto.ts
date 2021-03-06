import { Request, Response } from "express";
import { Producto } from '../config/sequelize';

export var producto_controller = {
    getAll: (req: Request, res: Response) => {
        Producto.findAll().then((productos: any) => {
            console.log("Obteniendo los productos", productos);
            res.send({
                "message": "Productos Obtenidos",
                "content": productos
            })
        })
    },
    create: (req: Request, res: Response) => {
        //obtengamos el rqu body
        console.log(req.body);
        Producto.create(req.body).then((ProductoCreado) => {
            if (ProductoCreado) {
                let respuesta = {
                    sucess: true,
                    message: 'Producto Creado',
                    content: ProductoCreado
                }
                res.status(201).send(respuesta);
            }
        }).catch((error: any) => {
            console.log("error al crear producto", error);
            res.status(500).send("Ocurio un error");
        });
    },
    getById: (req: Request, res: Response) => {
        let { id_producto } = req.params;
        Producto.findByPk(id_producto).then((producto) => {
            if (producto) {
                let respuesta = {
                    sucess: true,
                    message: "Producto Encontrado",
                    content: producto
                }
                res.status(200).send(respuesta)
            }
            else {
                let respuesta = {
                    sucess: false,
                    message: "Producto no encontrado",
                    content: producto
                }
                res.status(404).send(respuesta)
            }
        }).catch((error: any) => {
            console.log('Error al buscar por ID', error);
        })
    },
    DeleteById: (req: Request, res: Response) => {
        let { id_producto } = req.params;
        Producto.destroy({
            where: {
                prop_id: id_producto
            }
        }).then((cantidad) => {
            if (cantidad > 0) {
                console.log("Cant", cantidad);
                let respuesta = {
                    sucess: true,
                    message: "Producto Eliminado",
                    content: cantidad
                }
                res.status(200).send(respuesta);
            }
            else{
                let respuesta = {
                    sucess: true,
                    message: "No se ha eliminado",
                    content: cantidad
                }
                res.status(500).send(respuesta);
            }
        })
    },
    updateById:(req:Request,res:Response) =>{
        let {id_producto} = req.params;
        //El contenido a actualizar que registro va actualzar

        Producto.update(req.body,{
            where:{
                prop_id:id_producto
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