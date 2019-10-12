import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit, OnDestroy {

  suscriptor: Subscription;
  objFactura = {
    fact_nro: '',
    fact_rz: '',
    fact_fec: '',
    fact_ruc: ''
  }
  constructor(private _sFactura: FacturasService, private _sRouter: Router) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    try {
      this.suscriptor.unsubscribe();
    } catch (error) {

    }
  }
  crearFactura() {
    Swal.fire({
      type: 'info',
      title: 'Espere un momento',
      text: 'Estamos registrando la factura',
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    this.suscriptor = this._sFactura.postFacturas(this.objFactura).subscribe((rpta) => {
      if (rpta.id) {
        Swal.fire({
          type: 'success',
          title: 'Exito',
          text: 'La factura ha sido creada con exito perrro',
          confirmButtonText: 'Ir a facturas',
          allowOutsideClick: false,
        }).then((result) => {
          if (result.value) {
            this._sRouter.navigate(['facturas']);
          }
        })
      }
    });

  }
}
