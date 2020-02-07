import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from 'src/app/modals/product.modal';

@Component({
  selector: 'app-sort-product',
  templateUrl: './sort-product.component.html',
  styleUrls: ['./sort-product.component.scss']
})
export class SortProductComponent implements OnInit {

  @Input() products: IProducts[];

  constructor() { }

  ngOnInit() {
  }

  sortId(propertyName) {
    let a = (propertyName === 'id'? this.products.sort((a,b) => a.id - b.id) : this.products.sort((a,b) => b.id - a.id))
  }

  sortProduct(propertyName) {
    let a = (propertyName === 'name'? this.products.sort((a,b) => a.title.localeCompare(b.title)) : this.products.sort((a,b) => b.title.localeCompare(a.title)))
    // this.products.sort((a,b) => a.title.localeCompare(b.title));
  }

  sortPrice(propertyName) {
    let a = (propertyName === 'price'? this.products.sort((a,b) => a.price - b.price) : this.products.sort((a,b) => b.price - a.price))
    // this.products.sort((a,b) => a.price - b.price);
  }

  sortStock(propertyName) {
    let a = (propertyName === 'stock'? this.products.sort((a,b) => a.stock - b.stock) : this.products.sort((a,b) => b.stock - a.stock))
  }

}
