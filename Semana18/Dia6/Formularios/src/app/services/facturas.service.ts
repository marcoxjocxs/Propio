import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private _sHttp:HttpClient) { }
  getFacturas():Observable<any>
  {
    return this._sHttp.get("http://5d4a3b285c331e00148eaed5.mockapi.io/Factura");
  }
}


