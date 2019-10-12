import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListadoComponent } from './components/listado/listado.component';
import { MonedaPipe } from './pipes/moneda.pipe';
import { CambiarmonedaComponent } from './components/cambiarmoneda/cambiarmoneda.component';
import {FormsModule} from '@angular/forms';
import { MayusculaPipe } from './pipes/mayuscula.pipe';
import { CambiarnombreComponent } from './components/cambiarnombre/cambiarnombre.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListadoComponent,
    MonedaPipe,
    CambiarmonedaComponent,
    MayusculaPipe,
    CambiarnombreComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
