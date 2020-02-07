import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { IProducts } from 'src/app/modals/product.modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product: IProducts;
  id: number;
  paramId: number;
  public products = [];

  addProductForm = this.fb.group({
    title: ['', Validators.required],
    price: ['1', Validators.required],
    stock: ['1', Validators.required]
  })

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.addProductForm.reset();
    this.productService.getProductList().subscribe(data => {
      this.products = data
    },
      (err) => console.log(err),
      () => {
        this.activatedRoute.paramMap.subscribe(
          params => {
            this.paramId = parseInt(params.get('id'));
          }
        )

        if(this.paramId != -1) {
          this.product = this.products.find(item => item.id === this.paramId)
          this.addProductForm.patchValue({
            title: this.product.title,
            stock: this.product.stock,
            price: this.product.price
          })
        }
      }
    )
  }

  addProduct() {
    if(this.paramId != -1) {
      this.id = this.paramId;
    } 
    // this.products.map((item, index) => {
    //   return item.id = index+1;
    // })

    this.product = {
      id: this.id,
      title: this.addProductForm.controls['title'].value,
      price: parseInt(this.addProductForm.controls['price'].value),
      stock: parseInt(this.addProductForm.controls['stock'].value),
      isFavourite: false
    }

    if(this.paramId == -1) {
      // this.products.push(this.product);
      this.createproduct();
    } else {
      // this.products.splice(this.products.findIndex(item => item.id === this.paramId),1,this.product)
      this.updateProduct()
    }
    
    this.addProductForm.patchValue ({
      title: "",
      price: 1,
      stock: 1
    })
    // this.router.navigateByUrl('products/list');
    this.navigateToProductDetails()
  }

  updateProduct() {
    if(window.confirm('Are you sure, you want to update?')){
      this.productService.updateProduct(this.product).subscribe(data => {
        this.navigateToProductDetails()
      })
    }
  }

  createproduct() {
    this.productService.createPost(this.product).subscribe(data => {
      this.navigateToProductDetails()
    })
  }

  navigateToProductDetails() {
    this.router.navigate(['products/list']);
  }

}
