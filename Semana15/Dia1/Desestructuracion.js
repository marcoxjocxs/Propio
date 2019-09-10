    //let numeritos = [9,6,4["x","y","z"],100,90,60];

// let primero = numeritos[0];
// let segundo = numeritos[1];
// let tercero = numeritos[3];

// console.log(primero);
// console.log(segundo);
// console.log(tercero);


// let [uno,dos,tres,[xx,yy,zz],...elresto] = numeritos;

// console.log(uno);
// console.log(dos-uno);

// console.log(xx);
// console.log(yy);

// console.log(elresto);

let cevichelas = {
    id:1,
    precio: 30,
    descripcion: "ceviche más chelas",
    componentes : ["cerveza","ceviche"],
    ofertas:{
        descuento:5,
        condicion:"sábados y domingos"
    }
}


// let precio= cevichelas.precio;
// let descripcion = cevichelas.descripcion;

// console.log(precio);
// console.log(descripcion);

let{id,descripcion,precio} = cevichelas;
console.log(descripcion);
console.log(precio);

let{componentes:[primero,segundo]} = cevichelas;

console.log(primero);

