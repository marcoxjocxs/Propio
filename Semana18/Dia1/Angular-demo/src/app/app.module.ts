import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './Component/Formulario/formulario.component';
import { NavbarComponent } from './Component/Navbar/navbar.component';
import { ContenedorComponent } from './Component/Contenedor/contenedor.component';
import {FormsModule} from '@angular/forms';
import { ProductoDetalleComponent } from './Component/producto-detalle/producto-detalle.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContenedorComponent,
    FormularioComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }