import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  
  constructor() { }


  miGenero: string="Bachata";
  ngOnInit() {
  }

  imprimir(nombres, apellidos) {
    console.log("click del boton");
    console.log(`nombres ${nombres.value}`);
    console.log(`apellidos ${apellidos.value}`);
  }
  imprimir2(apodo, pregunta) {

    console.log(`apodo ${apodo.value}`);
    console.log(`pregunta ${pregunta.value}`);
  }
  imprimir3(raza, edad) {

    console.log(raza);
    console.log(edad);
  }

  registrarCancion(formulario)
  {
    console.log(formulario.value);
    console.log(this.miGenero);
  }


}
