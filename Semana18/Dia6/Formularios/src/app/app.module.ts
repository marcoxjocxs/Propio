import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importando el modulo HTTP
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturaComponent } from './components/factura/factura.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { RUTAS } from './app.routes';
import { VerFacturaComponent } from './components/ver-factura/ver-factura.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacturaComponent,
    NavbarComponent,
    ErrorComponent,
    CrearFacturaComponent,
    VerFacturaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RUTAS,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
