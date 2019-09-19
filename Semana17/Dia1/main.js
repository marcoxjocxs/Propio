window.onload = function () {
    let btnCrearRestaurantes = $("#crearRestaurante");
    let btnObtenerRestaurante = $("#obtenerRestaurantes");

    function inicializandoFireBase() {
        var firebaseConfig = {
            apiKey: "AIzaSyAkUiQpgwt5p3PC5PH3Bka4bn_wtJROuzU",
            authDomain: "restaurantes-812db.firebaseapp.com",
            databaseURL: "https://restaurantes-812db.firebaseio.com",
            projectId: "restaurantes-812db",
            storageBucket: "",
            messagingSenderId: "349080335719",
            appId: "1:349080335719:web:2b80e88b909d5501d82bc2"
        };
        firebase.initializeApp(firebaseConfig);
    }
    inicializandoFireBase();
    function getRestaurantes() {
        //nos conectaremosa la BD, y le pasaremos a que nodo queremos conectarnos

        var referencia = firebase.database().ref("restaurante");

        referencia.on("value", data => {
            //console.log(data);
            data.forEach(fila => {
                console.log(fila.key);
                console.log(fila.val().nombre);
                console.log(fila.val().direccion);
            })
        });
    }

    let crearRestaurante = () => {
        let nombre = "Cevichelas 2";
        let direccion = "No se camino a las Alas Peruanas"

        let referencia = firebase.database().ref("restaurante");
        const NUEVOKEY = referencia.push().key;

        referencia.child(NUEVOKEY).set({
            nombre: nombre,
            direccion: direccion
        },
            error => {
                if (error) {
                    console.log(error);
                }
            }
        )
    }
    btnCrearRestaurantes.click(crearRestaurante);
    getRestaurantes();
};



