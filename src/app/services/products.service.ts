import { Injectable } from '@angular/core';
import { IProducts } from '../modals/product.modal';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
}) 

export class ProductService {

    cartProductList: IProducts[] = [];
    private _url: string = "http://localhost:3000/posts"

    constructor(private http: HttpClient) { }

    getProductList(): Observable<IProducts[]> {
        return this.http.get<IProducts[]>(this._url);
    }

    createPost(product): Observable<IProducts> {
        console.log(product)
        return this.http.post<IProducts>(this._url,
            {title: product.title, price: product.price, stock: product.stock, quantity: 1, isFavourite: false}
        );
    }

    updateProduct(product) {
        return this.http.put<IProducts>(this._url + '/' + product.id, 
        ({title: product.title, price: product.price, stock: product.stock})
        );
    }

    deleteProduct(id): Observable<IProducts> {
        return this.http.delete<IProducts>(this._url + '/' + id);
    }
}