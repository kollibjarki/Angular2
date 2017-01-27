import { Component, OnInit } from '@angular/core';
import { BasketService } from '../shared/basket.service';
import { AccountService } from '../shared/account.service';
import { ProductService } from '../shared/product.service';
import { ValueService } from '../shared/value.service';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
      private basketService : BasketService,
      private ordersService : OrdersService,
      private valueService : ValueService,
      private accountService : AccountService,      
  ) { }

  ngOnInit() {
  }

  placeOrder() {
    let userName = this.valueService.user.userName;
    this.ordersService.placeOrder(userName);
  }
}
