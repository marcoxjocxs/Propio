
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';


const MIS_RUTAS: Routes = [
 {
  path: '',
  component: HomeComponent
 },
 {
  path: 'home',
  component: HomeComponent
 },
 {
  path: 'informacion',
  component: InformacionComponent
 },
 
];

export const RUTAS = RouterModule.forRoot(MIS_RUTAS);