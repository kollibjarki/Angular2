import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-popular',
  templateUrl: './product-popular.component.html',
  styleUrls: ['./product-popular.component.css']
})
export class ProductPopularComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private basketService : BasketService
  ) { }
  
  ngOnInit() {
    this.productService.getPopularProducts();
  }

  productDetail(productId: number){
    this.productService.toProductDetails(productId);
    this.productService.getProduct(productId);
  }

  addToCart(product, productId){
    this.basketService.addToBasket(product, productId);
  }

}
