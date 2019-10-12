import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit, OnDestroy {
  subscriptor: Subscription;

  objFactura = {
    fact_nro: '',
    fact_rz: '',
    fact_fech: '',
    fact_ruc: ''
  }

  constructor(private _sFactura: FacturasService,
    private _sRouter: Router) { }

  ngOnInit() {
  }

  crearFactura() {
    Swal.fire({
      title: 'Espere un momento',
      text: 'Estamos registrando la factura',
      type: 'info',
      allowOutsideClick: false,
      showConfirmButton: false
    })

    this.subscriptor = this._sFactura.postFactura(this.objFactura)
      .subscribe((rpta) => {
       console.log(rpta);
      })

  }

  Revisar()
  {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Revisar Exitoso',
      showConfirmButton: false,
      timer: 1500
    })
  }
  ngOnDestroy() {
    try {
      this.subscriptor.unsubscribe();
    } catch (error) {

    }
  }


}