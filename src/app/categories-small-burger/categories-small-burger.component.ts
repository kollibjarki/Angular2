import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-categories-small-burger',
  templateUrl: './categories-small-burger.component.html',
  styleUrls: ['./categories-small-burger.component.css']
})
export class CategoriesSmallBurgerComponent implements OnInit {

  constructor(
    private productService : ProductService,
    private valueService : ValueService
  ) { }

  ngOnInit() {
  }

  @Input() isClosed = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  toggle() {
      this.isClosed = !this.isClosed;
      this.isClosed ? this.closed.emit(): this.opened.emit();
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