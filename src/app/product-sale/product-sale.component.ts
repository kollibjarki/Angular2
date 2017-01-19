import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { BasketService } from '../basket.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private basketService : BasketService
  ) { }

  ngOnInit() {
    this.productService.getOnSaleProducts();
  }
  
  productDetail(productId: number){
    this.productService.toProductDetails(productId);
    this.productService.getProduct(productId);
  }

  addToCart(product, productId){
    this.basketService.addToBasket(product, productId);
  }

}
