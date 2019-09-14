//string
let texto:string = "Marco";
texto="cevichelas";
//number
let miEdad:number = 22;

//booleano
let conHambre:Boolean = true;

//any
let multidato:any = 0;
multidato="patata"
multidato = true;

let numeros:Number[] = [1,2,3,4,5,6];
let arrMultidatos:any[] = [1,"hola",2,true];
let masMultidatos:Array<any> = [2,"chau",true,8751];

let anio:Number|String = 2019;
anio="2019";

console.log(anio);
numeros.forEach((num:Number)=>{
    console.log(num);
})