import { Component, OnInit } from '@angular/core';
import { BasketService } from '../shared/basket.service';
import { ValueService } from '../shared/value.service';
import { ProductService } from '../shared/product.service';
import { GlobalService } from '../shared/global.service';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService : BasketService,
    private globalService : GlobalService,
    private valueService : ValueService,
    private productService : ProductService,
    private ordersService : OrdersService
  ) { }

  ngOnInit() {
    if(this.valueService.isAdminLoggedIn.value == true){
      this.globalService.redirect();
    }
  }

  productDetail(productId: number){
    this.productService.getProduct(productId);
  }

  checkOut(){
    this.ordersService.placeOrder(this.valueService.user.userName);
  }
  
  addToBasket(product, productId){
    let qty = 1;
    this.basketService.addToBasket(product, productId, qty);
  }

  removeFromBasket(product, productId){
    this.basketService.removeOneFromBasket(product, productId);
  }

  removeItem(product, productId){
    this.basketService.removeItemFromBasket(product, productId);
  }
  

}
