function lugar(nombrel, nrofilas, nrocolumnas, idlugar) {
    var Pabellon = {
        nombre: nombrel,
        capacidad: nrofilas * nrocolumnas,
        nro_filas: nrofilas,
        nro_columnas: nrocolumnas,
        id: idlugar,
        nichos: [
            {
                id: 0001,
                nro: 1,
                precio: 5000,
                estado: true,
            },
            {
                id: 0002,
                nro: 2,
                precio: 5000,
                estado: true,
            },
            {
                id: 0003,
                nro: 3,
                precio: 5000,
                estado: true,
            },
            {
                id: 0004,
                nro: 4,
                precio: 5000,
                estado: true
            },
            {
                id: 0005,
                nro: 5,
                precio: 5000,
                estado: true,
            },
        ],
        vendernicho: function (iddelnicho) {
            for (i = 0; i < this.nichos.length; i++) {
                if (this.nichos[i].id == iddelnicho) {
                    if (this.nichos[i].estado == true) {
                        console.log("Nichos Comprado");
                        this.nichos[i].estado = false;
                    }
                    else {
                        alert("Error Pabellon ocupado");
                    }
                }

            }

        },
        consultarNichosLibres: function () {
            cant = 0;
            for (i = 0; i < this.nichos.length; i++) {
                if (this.nichos[i].estado == true) {
                    cant++;
                }
            }
            console.log(`Nichos libres son: ${cant}`);
        },
        liberarPabellon: function (buscaid) {
            if (idlugar == buscaid) {
                this.nichos = [];
            }
        },
        repoblarnichos: function () {
            var cantidad = +prompt("Ingrese cuantos nichos desea");
            for (i = 0; i < cantidad; i++) {
                var objnuevo = {
                    id: 0001,
                    nro: 1,
                    precio: 5000,
                    estado: true,
                }
                this.nichos[i].push(objnuevo);
            }
        }

    }
    return Pabellon;
}
var ashiii = lugar("Ya perdiste", 4, 5, 1);
console.log(ashiii);
ashiii.vendernicho(3);
console.log(ashiii.nichos);
ashiii.consultarNichosLibres();
ashiii.liberarPabellon(0001);
console.log(ashiii);



