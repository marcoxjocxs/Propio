window.onload = () => {
    var mapGoogle;
    let divMapa = document.getElementById("mapa");
    function inicializandoFireBase() {
        var firebaseConfig = {
            apiKey: "AIzaSyAR99F1Faa_8leGvO816AKdzuodrzqWyHQ",
            authDomain: "parking-1d89d.firebaseapp.com",
            databaseURL: "https://parking-1d89d.firebaseio.com",
            projectId: "parking-1d89d",
            storageBucket: "",
            messagingSenderId: "357029925015",
            appId: "1:357029925015:web:d5092230e1ed64f64e59d2"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    inicializandoFireBase();

    function configurarMaps() {
        mapGoogle = new google.maps.Map(divMapa, {
            center: { lat: -16, lng: -71 },
            //zoom
            zoom: 9
        });
        listenerMaps();
    }

    let crearNuevoParqueo = (lat, lng) => {
        $('#modal').modal('show');
       
        let btnCrear = $('#btnCrear');
        btnCrear.click(() => {
            let inputNombre = $('#inputNombre').val();
            let inputDireccion = $('#inputDireccion').val();
            let inputDescripcion = $('#inputDescripcion').val();
        
            let referencia = firebase.database().ref("parking");

            const NUEVO_ID = referencia.push().key;
            referencia.child(NUEVO_ID).set({
                nombre: inputNombre,
                descripcion: inputDescripcion,
                direccion: inputDireccion,
                lat: lat,
                lng: lng
            },
                error => {
                    if (error) {
                        console.log(error);
                    }
                }
            );
        })
    }

    let listenerMaps = () => {
        mapGoogle.addListener("click", coords => {
            let lat = coords.latLng.lat();
            let lng = coords.latLng.lng();

            console.log(lat, lng);
            crearNuevoParqueo(lat,lng);
        })
    }


    function imprimirMarcadores(arregloMarcadores) {
        arregloMarcadores.forEach(({ nombre, direccion, descripcion, lat, lng }) => {
            console.log("asdfhgj",nombre);
            
            let miLatLng = {
                lat: lat,
                lng: lng,
                
            }
            let marcador = new google.maps.Marker({
                position: miLatLng,
                icon:{
                    url:'./evil.png',
                    scaledSize:new google.maps.Size(50,50)
                },
                title:nombre
            });
            let info=new google.maps.InfoWindow({

                content:`<h4> ${nombre}</h4>
                        <br/>
                        <strong>Direccion:</strong>${direccion}
                        <br/>
                        <strong>Descripcion</strong>${descripcion}`
            });
            
            marcador.addListener("click",()=>{
                //Recive el mapa 
                info.open(mapGoogle,marcador);
            })
            //setMap ( el mapa donde la quiero poner)
            marcador.setMap(mapGoogle);
        })
    }

    function obtenerParking() {
        let referencia = firebase.database().ref("parking");
        referencia.on("value", data => {
            let arregloData = [];
            data.forEach(espacio => {
                /* x */
                let objTemporal = {
                    nombre: espacio.val().nombre,
                    descripcion: espacio.val().descripcion,
                    direccion: espacio.val().direccion,
                    lat: espacio.val().lat,
                    lng: espacio.val().lng

                }
                arregloData.push(objTemporal);
                imprimirMarcadores(arregloData);
            });
        });
    }

    configurarMaps();
    obtenerParking();
}