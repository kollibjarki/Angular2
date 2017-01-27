import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Product } from './product';
import { User } from './user';
import { Order } from './order';
import { Category } from './category';

@Injectable()
export class ValueService {
  
  dialogMessage: string;
  selectedCategoryName: string = '';
  numberOfItemsInBasket: number = 0;
  basketTotalPrice: number = 0;
  totalVSK: number = 0;
  basketSubTotal: number = 0;
  Basket: Product[];
  selectedCategoryList: Product[];
  inactiveList: Product[];
  searchList: Product[];
  categories: Category[];
  user: User = new User;
  
  numberOfOrders: number = 0;
  orderList: Order[] = [];

  public isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  setLoginStatus(isLoggedIn){
   this.isUserLoggedIn.next(isLoggedIn);
  }

  public isAdminLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  setAdminStatus(isAdmin: boolean){
   this.isAdminLoggedIn.next(isAdmin);
  }
  
  public activeProduct:BehaviorSubject<Product> = new BehaviorSubject<Product>(null);
  setActiveProduct(product: Product){
    this.activeProduct.next(product);
  }

  clearAccess(){
    this.resetCalc();
    this.isUserLoggedIn.next(false);
    this.isAdminLoggedIn.next(false);
  }
  
  resetUser(){
    this.user = {
      userName : null,
      access_token: null,
      token_type : null,
      expires_in: null};
  }

  resetCalc(){
    this.resetUser();
    this.Basket = null;
    this.numberOfItemsInBasket = 0;
    this.basketTotalPrice = 0;
  }
 

}