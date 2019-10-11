import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from './../../services/facturas.service';
import { Subscription } from 'rxjs';
import  Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

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
  

  constructor(private _sFactura: FacturasService) { }

  ngOnInit() {
  }
  crearFactura() {
    console.log(this.objFactura);
    this.subscriptor = this._sFactura.postFactura(this.objFactura).subscribe((rpta) => {
      console.log(rpta);
    })
    
  }

  showModal()
  {
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Ha sido ingresado',
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