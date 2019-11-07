import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

//temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

//modulos
import { SharedModule } from './../shared/share.module';
import { PAGES_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})
export class PagesModule{}