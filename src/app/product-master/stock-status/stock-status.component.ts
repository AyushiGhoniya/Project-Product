import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProducts } from 'src/app/modals/product.modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.scss']
})
export class StockStatusComponent implements OnInit, OnChanges {

  @Input() product: IProducts;
  @Input() stock: number;
  @Input() fromComp: string;

  status: string;
  labelColor: string;
  grade: string;

  constructor(
    private http:HttpClient
  ) { }

  ngOnChanges(changes: SimpleChanges) { 
      if (this.product.stock <= 10) {
        this.labelColor = '#d9534f';
        this.status = 'Low';
      } else if (this.product.stock > 10 && this.product.stock <= 20) {
        this.labelColor = '#f0ad4e';
        this.status = 'Average';
      } else {
        this.labelColor = '#5cb85c';
        this.status = 'High';
      }
  }

  onKeyPress() {
    console.log(this.product.stock);
    this.http.patch('http://localhost:3000/posts/'+this.product.id,{stock:this.product.stock}).subscribe(res=>console.log(res))
  }

  ngOnInit() {}

}
