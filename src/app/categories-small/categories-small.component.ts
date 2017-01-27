import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-categories-small',
  templateUrl: './categories-small.component.html',
  styleUrls: ['./categories-small.component.css']
})
export class CategoriesSmallComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private valueService : ValueService
  ) { }

  ngOnInit() {
    this.productService.getCategories();
  }

  goToCategory(category){
    this.productService.getProductList(category);
  }

  goToOnSale(){   
    this.productService.getOnSaleProducts();
  }
  
  goToPopular(){   
    this.productService.getPopularProducts();
  }
  
}