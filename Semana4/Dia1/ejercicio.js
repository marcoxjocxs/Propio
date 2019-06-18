console.log("Ejercicio 3.1");
var edad=+prompt("Ingrese su edad");
if(edad>17)
{
    console.log("Usted puede votar");
}
else{
    console.log("Usted no puede votar nooooooob");
}

console.log("Ejercicio 3.4");
var horas = +prompt("Ingrese las horas que estuvo en el estacionamiento");
var total=0;
if(horas == 1 && horas==2)
{
    total=horas*5;
    console.log("Total a pagar es $ "+ total);
}
else{
    if(horas>2 && horas<6)
    {
        total=10;
        horas=horas-2;
        total=total + (horas*4);
        console.log("Total a pagar es $ "+ total);
    }
    else{
        if(horas>5 && horas<11)
        {
            total=22;
            horas=horas-5;
            total=total + (horas*3);
            console.log("Total a pagar es $ "+ total);
        }
        else{
            if(horas>10)
            {
                total=37;
                horas=horas-10;
                total=total+(horas*2);
                console.log("Total a pagar es $ "+ total);
            }
        }
    }
}
///////////////////////////////////////////////////////////

console.log("Ejercicio 3.9");
var cuotabase=0;
var total=0;
var chela=prompt("Bebe alcohol marque 1 y si no marque otro numero");
var edad=+prompt("Ingrese la edad");
var poliza=prompt("Ingrese poliza de seguro A o B");
var enfermedad=prompt("Ingrese 1 si tiene alguna enfermedad y  si no cualquier tecla");
var lentes=+prompt("Ingrese 1 si usa lentes y si no cualquier tecla");
if(poliza=='A' || poliza=='a')
{
    cuotabase=1200;
    total=cuotabase;
}
else{
    if(poliza=='B' || poliza=='b')
    {
        cuotabase=900;
        total=cuotabase;
    }
}
if(chela==1)
{
    console.log("Se detecto que tiene problema de alcoholismo");
    total=total + (cuotabase * 0.10);
}
else{
    console.log("No bebe alcohol");
    
}
if(edad>39)
{
    total=total + (cuotabase*0.20);
    console.log("Es mayor de 40 años");
}
else{
    total=total + (cuotabase * 0.10);
    console.log("Es menor o igual de 40 años");
}
if(enfermedad==1)
{
    total=total + (cuotabase * 0.05);
    console.log("Posee una enfermedad");
}
else{
    console.log("No posee una enfermedad");
}
if(lentes==1)
{
    total=total + (cuotabase * 0.05);
    console.log("Usa lentes");
}
else{
    console.log("No posee lentes");
}

console.log("El total a pagar es de : "+total + "Dolares");
