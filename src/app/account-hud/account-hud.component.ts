import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { AccountService } from '../account.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-account-hud',
  templateUrl: './account-hud.component.html',
  styleUrls: ['./account-hud.component.css']
})
export class AccountHudComponent implements OnInit {

  constructor(
      private accountService : AccountService,
      private basketService : BasketService
  ) { }

  ngOnInit() {
  }
  @Input() UserIsClosed = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  on() {
    if(this.UserIsClosed == false){
      this.UserIsClosed = true;
      this.UserIsClosed ? this.closed.emit(): this.opened.emit();     
    } else
      this.UserIsClosed = false;
      this.UserIsClosed ? this.closed.emit(): this.opened.emit();
  }
  off() {
      this.UserIsClosed = true;
      this.UserIsClosed ? this.closed.emit(): this.opened.emit();
  }  

  logOut(){
    this.off();
    this.accountService.logOut();
  }

  toBasket(){
    this.basketService.getItemsInBasket();
  }
}
