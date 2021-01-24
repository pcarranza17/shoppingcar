import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'eshop';
  car: Car;

  constructor(private _shoppingcar: ShoppingCartService) { }

  ngOnInit(): void {
    this.car = JSON.parse(this._shoppingcar.getCar());
  }

}