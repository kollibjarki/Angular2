import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { BasketService } from '../basket.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
        private productService : ProductService,
        private basketService : BasketService,
        private accountService : AccountService
  ) { }


  ngOnInit() {
  }

  addToCart(product, productId, quantity){
    console.log(quantity); // needs work
    this.basketService.addToBasket(product, productId);
  }

  back(): void {
      this.productService.goBack();
  }

}
