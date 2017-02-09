import { Component, OnInit } from '@angular/core';
import { ValueService } from '../shared/value.service';
import { GlobalService } from '../shared/global.service';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(
    private valueService : ValueService,
    private globalService : GlobalService,
    private productService : ProductService
  ) { }
  
  ngOnInit() {
    if(this.valueService.isAdminLoggedIn.value == true){
      this.globalService.redirect();
    }
    if(this.valueService.isUserLoggedIn.value == false){
      if(this.valueService.activeProduct.value == null){
        this.globalService.redirect();
      }else{
        this.productService.getProductList(this.valueService.activeProduct.value.CategoryName);
        this.globalService.toCategory();
      }
    }
  }

  productDetail(Id: number){
    this.productService.getProduct(Id);
  }
}
