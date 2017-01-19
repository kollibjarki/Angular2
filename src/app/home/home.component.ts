import { Component, OnInit,ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { AccountService } from '../account.service';
import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private accountService : AccountService
  ) { }

 @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }


  ngOnInit() {
    this.productService.getCategories();
    this.accountService.checkUserToken();
  }

}
