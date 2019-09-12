window.onload = () => {
    let traerPerros = () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: "",
                timeout  =1000,
                date:null,
                success:function(respuesta){
                    resolve(respuesta);
                },
                error:function(error){
                    reject(error);
                },
                beforeSend:function(){
                    console.log("Aqui buscando Perritos");
                }
            });
        }); 
    }

}