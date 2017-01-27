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
  }

  productDetail(Id: number){
    this.productService.getProduct(Id);
  }
}
