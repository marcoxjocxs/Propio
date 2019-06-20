
var cant=+prompt("Ingrese la cantidad de numeros que desea ingresar");
i=1;
var cero=0;
var mayor=0;
var menor=0;
while(i<=cant)
{
    num=+prompt("Ingrese numero")
    if(num==0)
    {
        cero++;
        i++;
    }
    else{
        if(num>0)
        {
            mayor++;
            i++;
        }
        else{
            menor++;
            i++;
        }
    }
}
console.log("Cantidad de Numero cero ingresados son:"+ cero);
console.log("Cantidad de Numero mayores a cero ingresados son:"+ mayor);
console.log("Cantidad de Numero menores a cero ingresados son:"+ menor);