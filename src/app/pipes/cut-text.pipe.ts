import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, limit?: number): string | null {
    if(!value) {
      return null
    } 
    return value.substring(0, (limit || 50)) + '...';
  }

}
