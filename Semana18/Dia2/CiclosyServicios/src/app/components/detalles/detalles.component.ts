import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Usuario } from "../../models/usuario";
import { ObservablesService } from '../../services/observables.service';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked {

  @Input()
  usuario: Usuario;
  miObservable: any;
  constructor(private _observable: ObservablesService) {
    this.miObservable = this._observable;
  }
  suscripcion: any;
  ngOnInit() {
    this.suscripcion = this.miObservable.contador.subscribe(data => {
      console.log(data);
    })
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();

  }
  ngAfterContentInit() {
    console.log("ejecutando AfterContentInit,despues que angular proyecte el contenido");
  }
  ngAfterContentChecked(): void {
    console.log("Ejecutando AfterContentChecked, despues de Angular compruebe el contenido proyeto, por el ejemplo para obtener atributos con @ViewChild");
  }
  ngAfterViewInit()
  {
    console.log("Ejecutando AfterViewInit, despues de inicializar las vistas del componente");
  }
  ngAfterViewChecked()
  {
    console.log("Ejecutando AfterViewChecked, despues de controlar las vistas");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('datosPrevios', changes.usuario.previousValue)
    console.log('datosActual', changes.usuario.currentValue)
    const nuevoValor = changes.usuario.currentValue;

    if (undefined !== nuevoValor) {
      this.usuario.nombres = this.usuario.nombres + "Administrador";
    }

  }

}
