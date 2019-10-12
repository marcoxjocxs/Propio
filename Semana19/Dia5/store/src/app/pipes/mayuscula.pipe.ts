import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';

@Pipe({
  name: 'mayuscula'
})
export class MayusculaPipe implements PipeTransform {  
  transform(value: any, ...args: any[]): any {
   
    for (var i = 0; i < value.length; i++) {
      if (value[i] == " ") {
        var numero=i+1;     
      }  
    }
      const tempo:string =value.charAt(numero).toUpperCase()+value.slice(numero+1);
    return tempo;
  }


}
