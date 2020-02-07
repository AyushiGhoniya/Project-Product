import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { IProducts } from 'src/app/modals/product.modal';
import { FilterPipe } from 'src/app/pipe/filter.pipe';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  searchText: string;
  product: IProducts;
  favourite:IProducts;
  products: IProducts[] = [];
  page = 1;
  pageSize =10;

  constructor(public productService: ProductService, private router: Router, private filter: FilterPipe) { }

  ngOnInit() {
    this.loadProducts()
  }

  navigateToAddProduct() {
    this.router.navigate(['products/addProduct',-1]);
  }

  getFilteredProducts() {
    if(isNaN(parseInt(this.searchText))) {
      this.products=this.filter.transform(this.products, 'title', this.searchText)
    } else {
      this.products=this.filter.transform(this.products, ['id','title','price','stock'], this.searchText)
    }
  }

  loadProducts() {
    this.productService.getProductList().subscribe(data => {
      console.log(data)
      this.products = data
    },
      (err) => console.log(err),
      () => { 
      }
    )
  }

  getTotalStock() {
    let totalStock = 0;
    this.products.forEach(element => {
      totalStock += element.stock;
    });
    return totalStock;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(element => {
      totalPrice += element.price;
    });
    return totalPrice;
  }

  getGrandTotal() {
    let grandTotal = 0;
    this.products.forEach(element => {
      grandTotal += (element.price * element.stock);
    });
    return grandTotal;
  }

  removeProduct(id) {
    if(confirm("Are you sure you want to delete this product...?")) {
      // this.products.splice(this.products.findIndex(item => item.id === id), 1)
      // this.products.map((item,index) => {
      //   return item.id = index+1;
      // })
      this.productService.deleteProduct(id).subscribe(data => {
        this.loadProducts()
        // console.log(this.products)
      })
    }
  }

  editProduct(id) {
    this.router.navigate(['products/addProduct',id]);
  }

  addToCart(id) {
    console.log(id);
    if(this.productService.cartProductList.find(item => item.id === id)) {
      confirm("Product already in cart...!!")
    } else {
      this.product = Object.assign({}, this.products.find(item => item.id === id))
      this.product.quantity = 1;
      this.productService.cartProductList.push(this.product);
    }
  }

  addToFavourite(id:number) {
    let product = this.products.find(item => {
      return item.id === id
    })
    product.isFavourite = !product.isFavourite
  }
}
