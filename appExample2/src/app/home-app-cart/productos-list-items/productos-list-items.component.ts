import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { jsonCartProducts } from 'src/app/model/cartProductsModel';

@Component({
  selector: 'app-productos-list-items',
  templateUrl: './productos-list-items.component.html',
  styleUrls: ['./productos-list-items.component.scss']
})
export class ProductosListItemsComponent implements OnInit {

  @Input() itemProduct: jsonCartProducts;

  @Output() outItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  giveItem(){
    this.outItem.emit(this.itemProduct);
  }

}
