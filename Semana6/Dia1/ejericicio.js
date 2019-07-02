/*Crear una funcion que recina 4 parametros(una url,un target(_self,_blank), el alto y el ancho para crar una nueva Ventana)
Pueden hacerlo con variables o con prompt, es conveniente usar las comillas invertidas
*/


function ejercicio(url,blank,alto,ancho){
    window.open(url,blank,`width=${ancho},height=${alto}`);
}

ejercicio("http://www.google.com",'_blank',500,500);