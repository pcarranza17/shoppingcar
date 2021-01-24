import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private _productService: ProductService,
    private _shoppingCar: ShoppingCartService
  ) { }

  ngOnInit(): void {
    const products = this._productService.getAll().subscribe( products => {
      this.products = products;
      console.log(this.products);
    });
  }

  addToCart(product){
    this._shoppingCar.add(product);
    window.location.reload();
  }

}
