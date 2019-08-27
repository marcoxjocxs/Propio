var tablaProductos = $('#listaProductos');
tablaProductos.DataTable({
    "ajax": {
        type: "GET",
        url: "https://5d4b6adb00dbb10014879b12.mockapi.io/productos",
        timeout: 1500,
        //dataSrc hara que maneje los datos obtenidos de la API como si se tratara de un arreglo
        dataSrc: ""
    },
    "columns": [
        { data: "prod_id" },
        { data: "prod_nom" },
        { data: "prod_desc" },
        { data: "prod_prec" },
        {
            data: "prod_img",
            render: function (data) {
                let imagen = `<img src="${data}" width="100" />`;
                return imagen;
            }
        }
    ],
    "language": {
        "lengthMenu": "Show _MENU_ entries",
        "search": "Buscar:",
        "info": "Mostrarndo _START_ a _END_ de _ TOTAL_ elementos",
        "paginate": {
            "first": "Inicio",
            "last": "Final",
            "next": "Siguiente",
            "previous": "Anterior"
        },

    }
});