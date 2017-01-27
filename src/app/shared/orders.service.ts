import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { BasketService } from './basket.service';
import { ValueService } from './value.service';
import { Location }  from '@angular/common';

@Injectable()
export class OrdersService {

    constructor(
        private http : Http,
        private basketService: BasketService,
        private valueService: ValueService
    ){}

    placeOrder(userName){
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