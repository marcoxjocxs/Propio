import { Component, OnInit} from '@angular/core';
import {Producto} from '../../clases/producto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  titulo: string = 'Agregar Productos';
  producto: Producto = {
    id:1,
    nombre:'Holanda',
    descripcion:'Un pais bello'
  }


  arrayProdictos:Array<Producto> = [
    {id:1,nombre:'Pizza',descripcion:'Fastfood'},
    {id:2,nombre:'Ceviche',descripcion:'Comida marina'},
    {id:3,nombre:'Aji',descripcion:'Es picante'},
    {id:4,nombre:'Rocoto',descripcion:'Se puede seleccionar'},
    {id:5,nombre:'Salchipapa',descripcion:'Con cremas?'}
  ];

   productoSeleccionado:Producto;
   seleccionarProducto(producto:Producto):void{
     this.productoSeleccionado=producto;
   }

  miFuncion():void{
   this.arrayProdictos.push(this.producto);
   console.log(this.arrayProdictos);
  }
  constructor() { }

  ngOnInit() {

  }

}
