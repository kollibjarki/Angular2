import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router }   from '@angular/router';
import { Product } from './product';

@Injectable()
export class BasketService {

  constructor(
    private http : Http
  ) { }

  itemsInBasket: Product[];
  numberOfItemsInBasket: number = 0;
  basketTotalPrice: number = 0;

  addToBasket(product: Product, productId){
    let userName = localStorage.getItem('userName');
    if(userName == null){
      this.addToGuestBasket(product);     
    }
    if(userName != null){
      this.addToUserBasket(productId, userName);
    }
  }
  removeFromBasket(product, productId){
    let userName = localStorage.getItem('userName');
    if(userName == null){
      this.removeFromGuestBasket(product);
    }
    if(userName != null){
      this.removeFromUserBasket(userName, productId);
    }
  }
  getItemsInBasket(){
    let userName = localStorage.getItem('userName');
    if(userName == null){
      this.getGuestBasket();
    }
    if(userName != null){
      this.getUserBasket(userName);
      }
  }
  emptyBasket(){
    let userName = localStorage.getItem('userName');
      if(userName == null){
        this.emptyGuestBasket();
      }
      if(userName != null){
        this.emptyUserBasket(userName);
      }
  }
  resetBasketCalculations(){
    this.numberOfItemsInBasket = 0;
    this.basketTotalPrice = 0;
  }
//------------------------------------- Transfer Guest to User Basket --------------//
  transferFromGuestToUserBasket(userName){
    let transferString: string = ""
    if(this.guestBasket.length != 0){
      for(let x = 0;x < this.guestBasket.length; x++){
        transferString += "ProductId=" + this.guestBasket[x].Id + "&";
        transferString += "Quantity=" + this.guestBasket[x].Quantity + "&";
      }
      this.guestBasket = [];
      let products = transferString.slice(0, -1); //taka seinasta & merkið af
      this.transferBasket(userName, products);
    }
  }
  transferBasket(userName, products){
    let body = products;
    let transferUrl = "http://localhost:56846/api/cart/transferBasket/"+ userName;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });  
    this.http.post(transferUrl, body, options)
      .subscribe(data => {
        this.getItemsInBasket();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }
//------------------------------------- User Basket --------------//
  getUserBasket(userName){
    let getBasketUrl = "http://localhost:56846/api/cart/getbasket/" + userName;
    this.http.get(getBasketUrl)    
      .map(res => res.json())
      .subscribe((response) => {
        this.resetBasketCalculations();    
        this.itemsInBasket = response;
        for(let x = 0;x < this.itemsInBasket.length; x++){
          this.numberOfItemsInBasket += this.itemsInBasket[x].Quantity;
          this.itemsInBasket[x].TotalPrice = this.itemsInBasket[x].Quantity * this.itemsInBasket[x].DiscPrice;
          this.basketTotalPrice += this.itemsInBasket[x].TotalPrice;
        }
      })
  }
  addToUserBasket(productId, userName){
    let addUrl = "http://localhost:56846/api/cart/add";
    let body = "UserId=" + userName + "&ProductId=" + productId;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(addUrl, body, options)
      .subscribe(data => {
        this.getItemsInBasket();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }
  removeFromUserBasket(userName, productId){
      let removeUrl = "http://localhost:56846/api/cart/remove";
      let body = "UserId=" + userName + "&ProductId=" + productId;
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(removeUrl, body, options)
        .subscribe(data => {
            this.getUserBasket(userName);
        }, error => {
          console.log(JSON.stringify(error.json()));
        });
  }
  emptyUserBasket(userName){ 
    let emptyBasketUrl = "http://localhost:56846/api/cart/empty/"+ userName;
    let body = "";
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post(emptyBasketUrl, body, headers)
    .subscribe(data => {
      this.getItemsInBasket();
      this.resetBasketCalculations();
    }, error => {
      console.log(JSON.stringify(error.json()));
    });    
  }
//------------------------------------- Guest Basket --------------//
  guestBasket: Product[] = [];
  itemAlreadyInBasket: boolean;
  getGuestBasket(){
    this.resetBasketCalculations();
    for(let x = 0;x < this.guestBasket.length; x++){
        this.numberOfItemsInBasket += this.guestBasket[x].Quantity;
        this.guestBasket[x].TotalPrice = this.guestBasket[x].Quantity * this.guestBasket[x].DiscPrice;
        this.basketTotalPrice += this.guestBasket[x].TotalPrice;
    }
    this.itemsInBasket = this.guestBasket;
  }
  addToGuestBasket(product: Product){
    this.itemAlreadyInBasket = false;
    for(let x = 0;x < this.guestBasket.length; x++){
      if(this.guestBasket[x].Id == product.Id){
        this.guestBasket[x].Quantity++;          
        this.itemAlreadyInBasket = true;
      }
    }
    if(this.itemAlreadyInBasket == false){   
      product.Quantity = 1;      
      this.guestBasket.push(product);
    }
    this.getItemsInBasket();      
  }
  removeFromGuestBasket(product){
    for(let x= 0; x < this.guestBasket.length; x++){
      if(this.guestBasket[x].Id == product.Id){
        if(product.Quantity == 1){
          this.guestBasket.splice(x, 1)        
        }
        if(product.Quantity >= 2){
          product.Quantity--;
        }
        this.getItemsInBasket();
      }
    }
  }
  emptyGuestBasket(){
    this.guestBasket = [];
    this.getItemsInBasket(); 
    this.resetBasketCalculations();
  }

}