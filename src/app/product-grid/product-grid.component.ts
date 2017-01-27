import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ValueService } from '../shared/value.service';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private globalService : GlobalService,
    private valueService : ValueService
  ) { }
  
  ngOnInit() {
    if(this.valueService.selectedCategoryList == undefined){
      this.globalService.redirect();
    }
  }
  
  productDetail(productId: number){
    this.productService.getProduct(productId);
  }

}