import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BasketService } from './basket.service';
import { GlobalService } from './global.service';
import { ValueService } from './value.service';
import { Location }  from '@angular/common';

@Injectable()
export class OrdersService {

    constructor(
        private http : Http,
        private basketService: BasketService,
        private globalService: GlobalService,
        private valueService: ValueService
    ){}

    placeOrder(userName){
        let orderString: string = ""
            if(this.valueService.Basket.length != 0){
              for(let x = 0;x < this.valueService.Basket.length; x++){
                orderString += "ProductId=" + this.valueService.Basket[x].Id + "&";
                orderString += "Quantity=" + this.valueService.Basket[x].Quantity + "&";
              }
              let products = orderString.slice(0, -1); //taka seinasta & merkið af
              let body = products;
              let orderUrl = "http://localhost:56846/api/orders/placeorder/"+ this.valueService.user.userName;
              let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
              let options = new RequestOptions({ headers: headers });  
              this.http.post(orderUrl, body, options)
                .subscribe(data => {
                    this.basketService.getItemsInBasket();
                    this.valueService.dialogMessage = "Order recived";
                    this.globalService.openDynamic();
                    this.getOrders();
            }, error => {
                console.log(JSON.stringify(error.json()));
            });
          }
      }


    getOrders() {
        this.valueService.numberOfOrders = 0;
        let getOrdersUrl = "http://localhost:56846/api/orders/getorders/" + this.valueService.user.userName;
        this.http.get(getOrdersUrl)   
          .map((res:Response) => res.json())
          .subscribe(
            data => { this.valueService.orderList = data },
            err => console.log(err),
            () => this.resolveOrders()
          );
    }
    
    resolveOrders(){
        for(let x = 0;x < this.valueService.orderList.length; x++){
            this.valueService.numberOfOrders += this.valueService.orderList[x].Quantity;
        }
    }


}