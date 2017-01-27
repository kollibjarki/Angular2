import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { BasketService } from './basket.service';
import { OrdersService } from './orders.service';
import { GlobalService } from './global.service';
import { ValueService } from './value.service';
import { DynamicDialogComponent } from '../dialogs/dynamic-dialog/dynamic-dialog.component';

@Injectable()

export class AccountService {

  constructor(
      private http: Http,
      private router: Router,
      private basketService : BasketService,
      private ordersService : OrdersService,
      private globalService: GlobalService,
      private valueService: ValueService
  ) { }

  userLogin(userName, password) {
    let _url = "http://localhost:56846/token";
    let body = "grant_type=password&" + "username=" + userName + "&password=" + password;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(response => {
        this.valueService.user = response.json();
        this.checkAdmin();
        this.globalService.loginSuccess();
      }, error => {
        this.globalService.fail(error.json().error_description);
      });
  }

  checkAdmin() {
    let checkAdminUrl = "http://localhost:56846/api/account/isadmin";
    let value: string = 'Bearer ' + this.valueService.user.access_token;
    var headers = new Headers({'Accept': '*/*'});
    headers.append('Authorization', value);
    this.http.get(checkAdminUrl,  {headers: headers})
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.valueService.setAdminStatus(data)},
        err => console.log(err),
        () => this.resolveLogIn()
      );
    }

  resolveLogIn(){
    if(this.valueService.isAdminLoggedIn.value == false){
      this.basketService.transferFromGuestToUserBasket();
      this.basketService.getUserBasket();
      this.ordersService.getOrders();
    }
    else{
      this.basketService.emptyGuestBasket();
      this.checkUrl();    
    }
  }
  
  checkUrl(){
    if(this.router.url.indexOf('edit') >= 0){
      this.globalService.goBack();
    }
    if(this.router.url.indexOf('basket') >= 0){
      this.globalService.redirect();
    }
    if(this.router.url.indexOf('orders') >= 0){
      this.globalService.redirect();
    }
  }

  logOut() { 
    this.checkUrl();
    this.valueService.clearAccess();
    this.valueService.dialogMessage = "Logged Out!";
    this.globalService.openDynamic();
  }

  register(email, userName, password, confirmPassword){
      let _url = "http://localhost:56846/api/Account/Register"
      let body = "Email=" + email+"&Name=" + userName+ "&password=" + password + "&ConfirmPassword=" + confirmPassword;
      let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: _headers });
      this.http.post(_url, body, options)
        .subscribe(response => {
          this.globalService.registerSuccess();
        }, error => {
          this.globalService.fail(error.json().Message);
        });
  }
    
  changePassword(OldPassword, NewPassword, ConfirmPassword) {
    let _url = "http://localhost:56846/api/account/ChangePassword";
    let value = this.valueService.user.access_token;
    let body = "OldPassword=" + OldPassword + "&NewPassword=" + NewPassword + "&ConfirmPassword=" + ConfirmPassword ;
    let _headers = new Headers({'Authorization': "Bearer " + value, 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
        this.valueService.dialogMessage = "Password Changed";
        this.globalService.openDynamic();    
        this.globalService.closeDialogTimeout();
      }, error => {
        this.globalService.fail(error.json().Message);
      });
  }
  
}
