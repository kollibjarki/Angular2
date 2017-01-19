import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { AccountService } from '../account.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(
    private basketService : BasketService,
    private accountService : AccountService,
    private productService : ProductService
  ) { }

  ngOnInit() {
  }
  numberOfItems:number;
  productDetail(productId: number){
    this.productService.toProductDetails(productId);
    this.productService.getProduct(productId);
  }
  remove(product, productId){
    this.basketService.removeFromBasket(product, productId);
  }
  addToCart(product, productId){
    this.basketService.addToBasket(product, productId);
  }
  emptyBasket(){
    this.basketService.emptyBasket();
  }

}
