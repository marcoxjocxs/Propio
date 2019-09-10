let nuevaFactura1 = new Factura(1,new Date(),10);

console.log(nuevaFactura1);
let producto1 = new Detalle(1,3,"Cervezas Artesanales",14);

let producto2 = new Detalle(2,1,"Piqueos",30);
console.log(producto1);
console.log(producto2);

nuevaFactura1.añadirDetalle(producto1);
nuevaFactura1.añadirDetalle(producto2);

console.log("Factura ya con productos ",nuevaFactura1);

nuevaFactura1.recalculo();

nuevaFactura1.mostrarComprobante();

let nuevoPedido1 = new NotaPedido(1,new Date(),true);
let producto3 = new Detalle(3,2,"Pizzas",30);
let producto4 = new Detalle(4,1,"Jarra de Chicha",15);
nuevoPedido1.añadirDetalle(producto3);
nuevoPedido1.añadirDetalle(producto4);

nuevoPedido1.recalculo();
nuevoPedido1.mostrarComprobante();
