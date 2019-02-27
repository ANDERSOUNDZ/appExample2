import { Component, OnInit } from '@angular/core';
import { jsonCartProducts } from 'src/app/model/cartProductsModel';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  productsList: jsonCartProducts [] = [
    {
      id: "01",
    name: "string",
    description: "string"
  },
  {
    id: "02",
  name: "string",
  description: "string"
  },
  {
    id: "03",
  name: "string",
  description: "string"
  }

  ];

  constructor(public shoppingCartServiceService: ShoppingCartServiceService) { }

  ngOnInit() {
  }

  addItem(item){
    this.shoppingCartServiceService.dataProducts.push(item);
  }

}
