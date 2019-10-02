import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductoComponent } from './Components/Producto/producto.component';
import { HeaderComponent } from './Components/Header/header.component';
import {FooterComponent} from './Components/Footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
