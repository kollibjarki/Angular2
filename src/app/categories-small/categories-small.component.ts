import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-categories-small',
  templateUrl: './categories-small.component.html',
  styleUrls: ['./categories-small.component.css']
})
export class CategoriesSmallComponent implements OnInit {

  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
  }
  smallGoToCategory(category){
    this.productService.getProductList(category);
    this.productService.toCategoryGrid(category);
  }
  popular(){
    this.productService.toPopular();
  }
  sale(){
    this.productService.toSale();
  }

}