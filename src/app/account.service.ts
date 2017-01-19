import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { BasketService } from './basket.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountService {

  constructor(
      private router: Router,
      private basketService : BasketService,
      private http: Http,
  ) { }

  userToken: string = "";
  hasToken: boolean;
  userName: string = "";
  isAdmin: boolean = false;
    
  checkUserToken(){ //Works Fine
    if(this.userToken == ""){
      this.userName = "";
      this.hasToken = false;
    }
    if(this.userToken != ""){
      this.userName = localStorage.getItem('userName');      
      this.hasToken = true;
    }
  }


  checkAdmin() { //  Virkar ekki
    let checkAdminUrl = "http://localhost:56846/api/account/isadmin";
    let token = localStorage.getItem('access_token');
    let value: string = 'Bearer ' + token;
    var headers = new Headers();
    headers.append('Authorization', value);
    this.http.get(checkAdminUrl,  headers)    
    .map(res => res.json())
    .subscribe((answer) => {
        console.log(answer)
        console.log(headers)
    })
  }
  
  register(email, userName, password, confirmPassword){  // Works Fine
      let _url = "http://localhost:56846/api/Account/Register"
      let body = "Email=" + email+"&Name=" + userName+ "&password=" + password + "&ConfirmPassword=" + confirmPassword;
      let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: _headers });
      this.http.post(_url, body, options)
        .subscribe(data => {
                alert('User Registered');
                this.router.navigate(["/account/login"]);
          }, error => {
              console.log(error.json());
          });   
  }

  userLogin(userName, password) { // Works Fine
    let _url = "http://localhost:56846/token";
    let body = "grant_type=password&" + "username=" + userName + "&password=" + password;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });

    this.http.post(_url, body, options)
      .subscribe(response => {
        localStorage.setItem('access_token', response.json().access_token);
        localStorage.setItem('expires_in', response.json().expires_in);
        localStorage.setItem('token_type', response.json().token_type);
        localStorage.setItem('userName', response.json().userName);
        if(localStorage.getItem('access_token') != null){
            this.userToken = localStorage.getItem('access_token').toString();
            this.userName = localStorage.getItem('userName');
            this.tempAdmin();
            this.basketService.transferFromGuestToUserBasket(userName);
            this.basketService.getItemsInBasket();
        }
      }, error => {
        alert("Something Is Not Right");
        console.log(JSON.stringify(error.json()));
      });
    }

  logOut() {  // Works Fine
        localStorage.removeItem('access_token');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('token_type');
        localStorage.removeItem('userName');
        this.userToken = "";
        this.userName = "";
        this.hasToken = false;
        this.isAdmin = false;
        this.basketService.resetBasketCalculations();
        this.router.navigate(['store']);  
    }

  tempAdmin(){    // Temporary Fix
        if(localStorage.getItem('userName') == "Kolbeinn" || localStorage.getItem('userName') == "Diddi"){
            this.isAdmin = true;
            this.checkUserToken();
            this.router.navigate(['admin']); 
        }else{
            this.isAdmin = false;
            this.router.navigate(['store']); 
        }
    }
}
