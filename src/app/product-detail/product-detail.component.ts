import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { BasketService } from '../shared/basket.service';
import { ValueService } from '../shared/value.service';
import { AccountService } from '../shared/account.service';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
        private globalService: GlobalService,
        private productService : ProductService,
        private valueService : ValueService,
        private basketService : BasketService
  ) { }

  Quantity: number = 1;
  ngOnInit() {
    if(this.valueService.activeProduct.value == undefined){
      this.globalService.redirect();
    }
  }

  addToCart(product, productId, quantity){
    this.basketService.addToBasket(product, productId, quantity);
  }

  editProduct(Id: number){
    this.productService.editProduct(Id);
  }

  goBack(CategoryName){
    if(this.valueService.isAdminLoggedIn.value == false){
      this.globalService.goBack();
    }else{
      this.productService.backToCategoryGrid(CategoryName);
    }    
  }


}
