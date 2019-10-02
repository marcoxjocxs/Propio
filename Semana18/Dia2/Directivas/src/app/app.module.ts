import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { FormulariosComponent } from './components/formularios/formularios.component';

//importando Modulo para formularios en angular
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgstyleComponent,
    NgSwitchComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
