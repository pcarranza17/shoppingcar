import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  private url = 'https://fakestoreapi.com/products';

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get(this.url).pipe(
      map((products: Product[]) => {
        return products;
      })
    );
  }

  getById(id: number){
    return this.http.get(`${this.url}/${id}`).pipe(
      map((product: Product) => {
        return product;
      })
    );
  }
}
