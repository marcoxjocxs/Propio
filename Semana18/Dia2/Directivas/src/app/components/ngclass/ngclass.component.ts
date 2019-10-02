import { Component, OnInit } from '@angular/core';
import {Producto} from '../../clases/producto';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  errorsh:boolean=false;
  productos : Array<Producto> = [
    {nombre:"Tv",cantidad:100},
    {nombre:"Ollas",cantidad:50},
    {nombre:"Microondas",cantidad:10}
  ]
  
  constructor() { }

  ngOnInit() {
  }


}
