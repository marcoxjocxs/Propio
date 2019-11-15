import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo : 'Principal',
      icono: 'mdi m,di-gauge',
      submenu:[
        {titulo:'Dashboard',url:'/dashboard'},
        {titulo:'ProgressBar',url:'/progress'},
        {titulo:'Grafica',url:'/grafica1'}
      ]
    }
  ]

  constructor() { }
}
