import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { IProducts } from '../modals/product.modal';

@Pipe({
  name: 'filter'
})
@Injectable({
  "providedIn": "root"
}) 
export class FilterPipe implements PipeTransform {

  transform(items: IProducts[], field: any, searchText: string): IProducts[] {
    if (!items) {
      return []
    }
    if (!field || !searchText) {
      return items
    }
    
    return items.filter(item => {
      if (typeof(field) === 'string' && item[field].toLowerCase().includes(searchText.toLowerCase())) {
        return items
      } else {
        if (
          typeof(field) === 'object' && item[field[0]].toString().toLowerCase().includes(searchText.toLowerCase()) ||
          typeof(field) === 'object' && item[field[1]].toString().toLowerCase().includes(searchText.toLowerCase()) ||
          typeof(field) === 'object' && item[field[2]].toString().toLowerCase().includes(searchText.toLowerCase()) ||
          typeof(field) === 'object' && item[field[3]].toString().toLowerCase().includes(searchText.toLowerCase())
        ) {
          return items
        }
      }
    })
  }
}
