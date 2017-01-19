import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
    this.productService.getAllProducts();
  }
  goToCategory(category){
    this.productService.getProductList(category);
    this.productService.toCategoryGrid(category);
  }
  popular(){
    this.productService.getPopularProducts();
    this.productService.toPopular();
  }
  sale(){
    this.productService.getOnSaleProducts();
    this.productService.toSale();
  }

}
