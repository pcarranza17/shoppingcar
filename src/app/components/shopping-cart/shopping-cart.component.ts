import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingcar: Car;

  constructor(private _shoppingCarService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingcar = JSON.parse(this._shoppingCarService.getCar());
    console.log(this.shoppingcar);
  }

}
