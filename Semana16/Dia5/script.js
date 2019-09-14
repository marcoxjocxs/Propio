window.onload = () => {
    var mapaGoogle;
    var miPosicion;
    var btnGetPosition = document.getElementById("btnGetPosition");
    var divMapa = document.getElementById("mapa");
    var btnBorrarPosition = document.getElementById("btnBorrarPosition");

    var coordAnterior;
    let configurarMapa = () => {
        //google.maps.Map(elemento donde se colocara el mapa)
        mapaGoogle = new google.maps.Map(divMapa, {
            center: { lat: -16, lng: -71 },
            zoom: 8
        });
        listenersMaps();
    }

    btnGetPosition.onclick = () => {
        //Esta habilicada la ubicacion?
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                let ubicacion = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                miPosicion = new google.maps.Marker({position: ubicacion,tittle:"Aqui estamos",map:mapaGoogle});
            }, (error) => {
                console.log("error")
            });

        }
        else {
            alert("No se permitio el accesso a la ubicacion");
        }
    }


    btnBorrarPosition.onclick = ()=>{
        miPosicion.setMap(null);
    }

    let listenersMaps=()=>{
        mapaGoogle.addListener('click',(coords)=>{
            let LatLng ={
                lat: coords.latLng.lat(),
                lng: coords.latLng.lng()
            }
            var marcador = new google.maps.Marker({
                position:LatLng,
                draggable:true

            });

            //----------------------------------
            marcador.addListener('drag',(coords)=>{
                let miLatLng ={
                    lat: coords.latLng.lat(),
                    lng: coords.latLng.lng()
                }
                console.log(miLatLng);
            });
            marcador.addListener("dblclick",()=>{
                marcador.setMap(null);
            })

            //AGREGAMOS EL MARCAADOR AL MAPA DE GOOGLE
            marcador.setMap(mapaGoogle);

            if(coordAnterior)
            {
                var coordenadasPolyline = [
                    coordAnterior,
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    }
                ]
            }else
            {
                var coordenadasPolyline = [
                    {   lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    },
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    }
                ]
            }
            let miPolyline = new google.maps.Polyline({
                path: coordenadasPolyline,
                strokeColor:"#ff0000",
                strokeWeight:1
            });

            miPolyline.setMap(mapaGoogle);
            coordAnterior = {
                    lat: coords.latLng.lat(),
                    lng: coords.latLng.lng()
            }
        });
    }
    
    configurarMapa();
}