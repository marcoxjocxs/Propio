import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-ver-factura',
  templateUrl: './ver-factura.component.html',
  styleUrls: ['./ver-factura.component.css']
})
export class VerFacturaComponent implements OnInit {

  id:string;
  constructor(private _sActivateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id=this._sActivateRoute.snapshot.paramMap.get('id');
    console.log(`ID RECIBIDO ===> ${this.id}`);
  }

}
