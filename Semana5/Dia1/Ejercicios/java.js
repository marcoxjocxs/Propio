function resistencia(color){
    var num=0;
    switch(color)
    {
        case "negro": {
            console.log("rojo");
            num=0;
            resultado(num)
            break;
        }
        case "marron":{
            console.log("rojo");
            num=1;
            resultado(num)
            break;
        }
        case "rojo": { 
            console.log("rojo");
            num=2;
            resultado(num)
            break;
        }
        case "naranja": { 
            console.log("naranja");
            num=3;
            resultado(num);
            break;
        }
        case "amarillo": { 
            console.log("amarillo");
            num=4;
            resultado(num);
            break;
        }
        case "verde": { 
            console.log("verde");
            num=5;
            resultado(num);
            break;
        }
        case "azul": { 
            console.log("azul");
            num=6;
            resultado(num);
            break;
        }
        case "violeta": { 
            console.log("violeta");
            num=7;
            resultado(num);
            break;
        }
        case "gris": { 
            console.log("gris");
            num=8;
            resultado(num);
            break;
        }
        case "blanco": { 
            console.log("blanco");
            num=9;
            resultado(num);
            break;
        }
            
    } 
}
var contador=1;
var valor=0;
var arre = [];
function resultado(num){
    
    for(j=valor;j<contador;j++)
    {
        arre[j]=num;
        console.log(arre[j]);
    }
    contador++;
    valor++;
    return arre;
}

resistencia("rojo");
resistencia("gris");
resistencia("amarillo");
console.log(` la resistencia es ${arre}`);




































