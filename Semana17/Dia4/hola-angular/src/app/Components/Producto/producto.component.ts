import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  title = 'Producto';
  content ='Producto Novedoso Te limpia la casa te laba ropa y te da desayuno'
  price='988.99'
}
