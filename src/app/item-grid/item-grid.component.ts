import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ValueService } from '../shared/value.service';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.css']
})
export class ItemGridComponent implements OnInit {

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
