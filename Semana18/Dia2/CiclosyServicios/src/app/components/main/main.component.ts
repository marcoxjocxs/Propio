import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../models/usuario";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  usuario:Usuario={
    nombres: '',
    apellidos : '',
    dni : 0
  };

  arrayUsuarios: Array<Usuario> = [];
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('Ejecutando NGDOCHECK');
    
  }
  usuarioSeleccionado:Usuario;

  seleccionarUsuario(usuario:Usuario)
  {
    this.usuarioSeleccionado = usuario;
  }
  anadirUsuario(){
    const usuariotmp = new Usuario();
    usuariotmp.nombres =this.usuario.nombres;
    usuariotmp.apellidos = this.usuario.apellidos;
    usuariotmp.dni = this.usuario.dni;
    this.arrayUsuarios.push(usuariotmp);
    console.log(this.arrayUsuarios);
  }
}
