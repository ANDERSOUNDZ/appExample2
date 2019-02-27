import { Component, OnInit } from '@angular/core';
import { jsonCartProducts } from 'src/app/model/cartProductsModel';
import { ShoppingCartServiceService } from 'src/app/service/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productsList: jsonCartProducts;

  constructor(public shoppingCartServiceService: ShoppingCartServiceService) { }

  ngOnInit() {
  }

  deleteItem(item){
    this.productsList=item;
    const inicio = this.shoppingCartServiceService.dataProducts.indexOf(item);
    this.shoppingCartServiceService.dataProducts.splice(inicio,1);  
  }


}
