import { Component, OnInit,OnDestroy } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Subscription } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit,OnDestroy {

  productos;
  suscriptor: Subscription;
  constructor(private _sTienda:TiendaService) { }

  ngOnInit() {
    this.suscriptor=this._sTienda.getProductos().subscribe((datos)=>{
      this.productos=datos;
    })
  }
  ngOnDestroy(): void {
     this.suscriptor.unsubscribe();
  }

}
