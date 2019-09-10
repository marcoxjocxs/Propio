let miPromesa = () => {
    return new Promise((resolve, reject) => {
        //Lo que queremos que haga reject or resolve
        setTimeout(() => { resolve("algo ha pasado y hemos tenido exito ejecutandolo") }, 3000)
    });
}
miPromesa().then(respuesta => {
    console.log("exito!!!!");
    console.log(respuesta);
}).catch(error=> {
    console.log("error");
})
