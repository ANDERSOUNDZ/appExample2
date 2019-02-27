import { Injectable } from '@angular/core';
import { jsonCartProducts } from '../model/cartProductsModel';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  public dataProducts: jsonCartProductsz [] = [];

  constructor() { }
}
