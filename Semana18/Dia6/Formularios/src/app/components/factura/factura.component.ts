import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'
import Swal from 'sweetalert2';
/* import { $ } from 'protractor'; */
declare var $:any;
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit, OnDestroy {

  facturas;
  subscriptor: Subscription;
  constructor(private _sFacturas: FacturasService,
              private _sRouter:Router) { }


  ngOnInit() {
    this.traerFacturas();
  }

  traerFacturas(){
    this.subscriptor = this._sFacturas.getFacturas().subscribe((result)=>{
      this.facturas=result;
    })
  }

  EliminarFactura(id)
  {
    Swal.fire({
      title: 'Estas Seguro de Elimarlo?',
      text: "Seguro eres un noooooobb!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminalo!'
    }).then((result) => {
      if (result.value) {
        this._sFacturas.deleteFactura(id).subscribe((rpta)=>{
          if (rpta.id) {
            Swal.fire(
              'Eliminar!',
              'Tu factura a sido elimanada.',
              'success'
            )
            this.traerFacturas();
          }
        })
       
      }
    })
  }
  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }
  crearFactura(){
    this._sRouter.navigate(['facturas','crear']);
  }
  abrirModalEditar(id)
  {
    $("#modalEditar").modal("show");
  }

}
