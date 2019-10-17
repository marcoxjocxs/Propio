import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference , DataSnapshot} from '@angular/fire/database/interfaces';
@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent implements OnInit {

  refUsuario:DatabaseReference;
  constructor(private _realtime:AngularFireDatabase) { 
    this.refUsuario = this._realtime.database.ref("usuarios");
  }

  ngOnInit() {
    /* console.log(this.refUsuario.key); */
    this.refUsuario.once('value').then((data:DataSnapshot)=>{
      console.log(data.toJSON());
    });
  }

}
