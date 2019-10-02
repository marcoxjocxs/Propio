import { Component, OnInit, OnDestroy } from '@angular/core';
import { FacturasService } from 'src/app/services/facturas.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit, OnDestroy {

  facturas;
  subscriptor: Subscription;
  constructor(private _sFacturas: FacturasService) { }


  ngOnInit() {
    this.subscriptor = this._sFacturas.getFacturas().subscribe((resultado) => {
      this.facturas = resultado;
      //console.log(this.facturas);
    })
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

}
