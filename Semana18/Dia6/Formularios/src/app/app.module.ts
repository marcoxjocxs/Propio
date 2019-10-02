import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importando el modulo HTTP
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FacturaComponent } from './components/factura/factura.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { RUTAS } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacturaComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
