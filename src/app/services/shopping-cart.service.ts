import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { setUncaughtExceptionCaptureCallback } from 'process';
import { Car } from '../models/car.model';
import { Product } from '../models/product.model';


const EMPTY_CAR: Car = {
	total: 0,
	products: []
};

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  car: Car;
  products: Product[];
  total: number;

  constructor(
) { }


  add(product: Product){
    this.car = JSON.parse(this.getCar());
    this.products = this.car.products;
    this.total = this.car.total;
    this.total = this.total + product.price;
    this.products.push(product);
    this.car.total = this.total;
    this.car.products = this.products;
    localStorage.setItem('car', JSON.stringify(this.car));
    console.log(this.car);
  }


  getCar(){
    let car = '';
		if ( !localStorage.getItem('car') ){
      localStorage.setItem('car', JSON.stringify(EMPTY_CAR))
    };

    car = localStorage.getItem('car');

		return car;
  }


}
