import { Router } from 'express';
import { producto_controller } from '../controladores/Producto';

/* import { getProductos, getProductoById, createdProduct} from './../controladores/Producto' */

export let producto_router = Router();
producto_router.get('/producto',producto_controller.getAll);

producto_router.post('/producto',producto_controller.create);

producto_router.get('/producto/:id_producto',producto_controller.getById);

producto_router.delete('/producto/:id_producto',producto_controller.DeleteById);

producto_router.post('/producto/actualizar/:id_producto',producto_controller.updateById);


/* producto_router.get('/productos', getProductos);
producto_router.get('/productos/:idProducto', getProductoById);
producto_router.post('/productos', createdProduct)
 */
// producto_router.get("/productos", (req, res) => {
//     res.send("entregando la lista de productos")
// })