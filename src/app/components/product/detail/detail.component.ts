import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product;

  constructor(
    private activeRoute: ActivatedRoute,
    private _productService: ProductService,
    private _shoppingCar: ShoppingCartService
  ) { }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params.id;
    this._productService.getById(id).subscribe( product => {
      this.product = product;
      console.log(this.product);
    });
  }

  addToCart(product){
    this._shoppingCar.add(product);
    window.location.reload();
  }

}
