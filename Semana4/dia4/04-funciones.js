var cafe ="pasado";

function Hola(){
    console.log("Hola chicos no pidan mucha pizza temen mejor un cafe "+ cafe);
    
}

//Invocando a una funcion
Hola();

cafe = "latte";
function Chau(){
    var hora="10:00 pm";
    console.log("Chicos tranquilosho nos vamos a las "+hora);
}
Chau();
//Let nos limitara el ambito de una variable a su entorno local
if(true){
    let valor ="Galletas";
}
//Esto sera un erro mientras el valor este con let y no un var 
console.log(valor);
