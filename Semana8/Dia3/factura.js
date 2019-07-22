window.onload=function()
{
    //hacemos este listado para guardar este objeto en el local storage
  var objFactura={
      fecha:'',
      nombre:'',
      direccion:'',
      dni:'',
      //listado de productos no va tener datos va ser un arreglo
      listadoProductos:[],
      total:''
  }
  //empezamos a relacionar nuestros inputs con nuestras VARIABLES (no siempre son los mismos, solo se hace para no perderse)
  var inputFecha=document.getElementById("inputFecha");
  var inputNombre=document.getElementById("inputNombre");
  var inputDireccion=document.getElementById("inputDireccion");
  var inputDni=document.getElementById("inputDni");
  var tProductos= document.getElementById("tProductos");
  var inputCant=document.getElementById("inputCant");
  var inputPro=document.getElementById("inputProd");
  var inputPre=document.getElementById("inputPrecio");
  var boton=document.getElementById("btnAgregar");
  var idTotal=document.getElementById("idTotal")
  var totalFactura=0;



  function obtenerFactura(){
      //obtenemos nuestro objeto en texto 
      var facturaTexto= localStorage.getItem("objFactura");
      console.log(facturaTexto)
      //esto hara que eso que esta obteniendo en texto lo pasara a un objeto 
      var facturaJSON=JSON.parse(facturaTexto);

     console.log(facturaJSON);

     
  }

  obtenerFactura();


  //Estamos cambiando los valores de las propiedades del objeto FACTura con el valor de los inputs
  boton.addEventListener("click", function(){

    objFactura.fecha=inputFecha.value;
    objFactura.nombre=inputNombre.value;
    objFactura.direccion=inputDireccion.value;
    objFactura.dni=inputDni.value;

    // console.log(objFactura);

    //estanos creando elemento para agregarlos al tbody
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    
    td1.innerHTML=inputCant.value;
    td2.innerHTML=inputPro.value;
    td3.innerHTML=inputPre.value;
    //cuando es boton vamos a multiplicar valor de input cant * input precio 
    td4.innerHTML=parseFloat(inputPre.value)*parseInt(inputCant.value);

    //Aqui cambiaremos el valor total de la factura 

    totalFactura=totalFactura+parseInt(inputCant.value)*parseFloat(inputPre.value);
     tdTotal.innerHTML=totalFactura;
    

    //agregamos todas las columnas a nuestra fila

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    //ahora agregamos nuestro tr a nuestra tabla tbody
    tProductos.appendChild(tr);


    //Creamos un objeto temporal que represente nuestro producto y----
    var objProducto={
        cantidad:inputCant.value,
        productos:inputPro.value,
        precioUnitario:inputPre.value,
        valorVenta:inputCant.value*inputPre.value
    }
    //lo arreglamos al arreglo de productos que tiene nuestro obj facturas
    objFactura.listadoProductos.push(objProducto);
    console.log(objFactura);

    var facturaConvertida=JSON.stringify(objFactura);
    console.log(facturaConvertida);
    

    //guardamos  nuestro objeto en el local storage 
    localStorage.setItem("objFactura",facturaConvertida);
    
    //esto se hace para vacear los datos que ya se escribieron e ingresar unos nuevos AQUI SE LIMPIA EL INPUT 
    inputCant.value="";
    inputPro.value="";
    inputPre.value="";

    


  });



}