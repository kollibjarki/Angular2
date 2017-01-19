import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private basketService : BasketService
  ) { }
  
  ngOnInit() {
  }
  productDetail(productId: number){
    this.productService.toProductDetails(productId);
    this.productService.getProduct(productId);
  }

  addToCart(product, productId){
    this.basketService.addToBasket(product, productId);
  }


}
