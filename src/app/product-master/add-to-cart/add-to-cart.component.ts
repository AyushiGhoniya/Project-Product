import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from 'src/app/modals/product.modal';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  fromComp: string;
  productList: IProducts[] = [];
  public products = [];

  constructor(public productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {  
    this.productService.getProductList().subscribe(data => {
      this.products = data
    },
      (err) => console.log(err),
      () => {
        this.fromComp = this.activatedRoute.snapshot.data['fromComp']

        if(this.fromComp=='cart') {
          this.productList = this.productService.cartProductList;
        } else {
          this.productList = this.products.filter(item => item.isFavourite === true)
          console.log(this.productList)
        }
      }
    )
  }

  ngOnChanges(id:number) {
    if(confirm("Item deleted from wishlist.")) {
      this.productList.splice(this.productList.findIndex(item => item.id === id), 1)
      this.productList.map((item,index) => {
        return item.id = index+1;
      })
    }
  }

  removeProduct(id) {
    if(confirm("Are you sure you want to delete this product...?")) {
      this.productList.splice(this.productList.findIndex(item => item.id === id), 1)
      this.productList.map((item,index) => {
        return item.id = index+1;
    })
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.productList.forEach(element => {
      totalPrice += element.price;
    });
    return totalPrice;
  }

  getTotalQuantity() {
    let totalQuantity = 0;
    this.productList.forEach(element => {
      totalQuantity += element.quantity;
    });
    return totalQuantity;
  }

  getGrandTotal() {
    let grandTotal = 0;
    this.productList.forEach(element => {
      grandTotal += (element.price * element.quantity);
    });
    return grandTotal;
  }

  // removeFromFavourite(id) {
  //   if(confirm("Item deleted from wishlist.")) {
  //     this.productList.splice(this.productList.findIndex(item => item.id === id), 1)
  //     this.productList.map((item,index) => {
  //       return item.id = index+1;
  //     })
  //   }
  // }
}
