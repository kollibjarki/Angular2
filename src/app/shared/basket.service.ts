import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ValueService } from './value.service';
import { GlobalService } from './global.service';
import { Product } from './product';

@Injectable()
export class BasketService {

  constructor(
    private valueService : ValueService,
    private globalService : GlobalService,
    private http : Http
  ) { }


  addToBasket(product: Product, productId, qty){
    this.valueService.isUserLoggedIn.value ? this.addToUserBasket(productId, qty) : this.addToGuestBasket(product, qty);
  }

  removeOneFromBasket(product, productId){
    this.valueService.isUserLoggedIn.value ? this.removeFromUserBasket(productId) : this.removeFromGuestBasket(product);
  }

  removeItemFromBasket(product, productId){
    this.valueService.isUserLoggedIn.value ? this.removeItemFromUserBasket(productId) : this.removeItemFromGuestBasket(product); 
  }

  getItemsInBasket(){
    this.valueService.isUserLoggedIn.value ? this.getUserBasket() : this.getGuestBasket();
  }

  emptyBasket(){
    this.valueService.isUserLoggedIn.value ? this.emptyUserBasket() : this.emptyGuestBasket();
  }

  resetBasketCalculations(){
    this.valueService.numberOfItemsInBasket = 0;
    this.valueService.basketTotalPrice = 0;
  }

//------------------------------------- Transfer Guest to User Basket --------------//
  transferFromGuestToUserBasket(){
    let transferString: string = ""
    if(this.guestBasket.length != 0){
      for(let x = 0;x < this.guestBasket.length; x++){
        transferString += "ProductId=" + this.guestBasket[x].Id + "&";
        transferString += "Quantity=" + this.guestBasket[x].Quantity + "&";
      }
      this.guestBasket = [];
      let products = transferString.slice(0, -1); //taka seinasta & merkið af
      this.transferBasket(products);
    }
  }

  transferBasket(products){
    let transferUrl = "http://localhost:56846/api/cart/transferBasket/"+ this.valueService.user.userName;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });  
    this.http.post(transferUrl, products, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => { },
        err => console.log(err),
        () => this.getUserBasket()
      );
    }

//------------------------------------- User Basket --------------//

  getUserBasket(){
    let getBasketUrl = "http://localhost:56846/api/cart/getbasket/" + this.valueService.user.userName;
    this.http.get(getBasketUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.valueService.Basket = data},
        err => console.log(err),
        () => this.calculateUserBasket()
      );
    }

  calculateUserBasket(){
    this.resetBasketCalculations();
    for(let x = 0;x < this.valueService.Basket.length; x++){
      this.valueService.numberOfItemsInBasket += this.valueService.Basket[x].Quantity;
      this.valueService.Basket[x].TotalPrice = this.valueService.Basket[x].Quantity * this.valueService.Basket[x].DiscPrice;
      this.valueService.basketTotalPrice += this.valueService.Basket[x].TotalPrice;
    }
    this.valueService.totalVSK = (this.valueService.basketTotalPrice * 0.24);
    this.valueService.basketSubTotal = this.valueService.basketTotalPrice - this.valueService.totalVSK;
  }

  addToUserBasket(productId, qty){
    let addUrl = "http://localhost:56846/api/cart/add";
    let body = "UserId=" + this.valueService.user.userName + "&ProductId=" + productId + "&Quantity=" + qty;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(addUrl, body, options)
      .subscribe(data => {
        this.getItemsInBasket();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }
  removeFromUserBasket(productId){
      let removeUrl = "http://localhost:56846/api/cart/remove";
      let body = "UserId=" + this.valueService.user.userName + "&ProductId=" + productId;
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(removeUrl, body, options)
        .subscribe(data => {
            this.getUserBasket();
        }, error => {
          console.log(JSON.stringify(error.json()));
        });
  }
  removeItemFromUserBasket(productId){
      let removeItemUrl = "http://localhost:56846/api/cart/removeitem";
      let body = "UserId=" + this.valueService.user.userName + "&ProductId=" + productId;
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(removeItemUrl, body, options)
        .subscribe(data => {
            this.getUserBasket();
        }, error => {
          console.log(JSON.stringify(error.json()));
        });
  }
  emptyUserBasket(){
    let emptyBasketUrl = "http://localhost:56846/api/cart/empty/"+ this.valueService.user.userName;
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
//------------------------------------- Guest Basket Ready --------------//
  guestBasket: Product[] = [];

  getGuestBasket(){
    this.valueService.numberOfItemsInBasket = 0;
    this.valueService.basketTotalPrice = 0;
    for(let x = 0;x < this.guestBasket.length; x++){
        this.valueService.numberOfItemsInBasket += this.guestBasket[x].Quantity;
        this.guestBasket[x].TotalPrice = this.guestBasket[x].Quantity * this.guestBasket[x].DiscPrice;
        this.valueService.basketTotalPrice += this.guestBasket[x].TotalPrice;
    }
    this.valueService.Basket = this.guestBasket;
    this.valueService.totalVSK = (this.valueService.basketTotalPrice * 0.24);
    this.valueService.basketSubTotal = this.valueService.basketTotalPrice - this.valueService.totalVSK;
  }

  addToGuestBasket(product: Product, qty){
  let itemAlreadyInBasket:boolean = false;    
    for(let x = 0;x < this.guestBasket.length; x++){
      if(this.guestBasket[x].Id == product.Id){
        this.guestBasket[x].Quantity += qty;          
        itemAlreadyInBasket = true;
      }
    }
    if(itemAlreadyInBasket == false){   
      product.Quantity = qty;      
      this.guestBasket.push(product);    
    }
    this.getGuestBasket();      
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
        this.getGuestBasket();
      }
    }
  }

  removeItemFromGuestBasket(product){
    for(let x= 0; x < this.guestBasket.length; x++){
      if(this.guestBasket[x].Id == product.Id){
          product.Quantity = 0;
          this.guestBasket.splice(x, 1)        
        }  
    }
    this.getGuestBasket();
  }

  emptyGuestBasket(){
    this.guestBasket = [];
    this.getGuestBasket();
    this.resetBasketCalculations();
  }

}
