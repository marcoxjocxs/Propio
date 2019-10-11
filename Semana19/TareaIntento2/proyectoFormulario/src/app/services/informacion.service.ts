import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  constructor(private _sHttp: HttpClient) { }

  getInformacion(): Observable<any> {
    return this._sHttp.get("http://5d4a3b285c331e00148eaed5.mockapi.io/Bleach");
  }
}


