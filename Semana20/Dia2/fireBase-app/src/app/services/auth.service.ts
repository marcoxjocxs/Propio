import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _sHttp: HttpClient) { }

  crearUsuario(correo, contra) {
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAqq46iCo5QpYFTz5HuEQDmh768BBqtKR0";
    let data = {
      email: correo,
      password: contra,
      returnSecureToken: true
    };

    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.post(url, JSON.stringify(data), { headers: misHeaders });
  }
  iniciarsesion(correo, contra) {
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAqq46iCo5QpYFTz5HuEQDmh768BBqtKR0";
    let data = {
      email: correo,
      password: contra,
      returnSecureToken: true
    };

    let misHeaders = new HttpHeaders().set("Content-type", "application/json");

    return this._sHttp.post(url, JSON.stringify(data), { headers: misHeaders });
  }
}
