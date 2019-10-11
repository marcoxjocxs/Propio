import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InformacionService } from 'src/app/services/informacion.service';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit,OnDestroy {
  informacion;
  subscriptor: Subscription;
  constructor(private _info: InformacionService) { }

  ngOnInit() {
    this.subscriptor = this._info.getInformacion().subscribe((resultado) => {
      this.informacion = resultado;
    })
  }

  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }

}
