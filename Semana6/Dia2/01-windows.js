var url =window.location.href;
console.log(url);
if(url.indexOf("nosotros")>=0)
{
    console.log("Estoy en la pagina nosotros");
}
else{
    console.log("Estoy en la pagina window");
}
console.log(window.document);