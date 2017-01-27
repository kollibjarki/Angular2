import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';
import { GlobalService } from '../shared/global.service';
import { ValueService } from '../shared/value.service';
import { SearchPipe } from './search-filter.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private globalService: GlobalService,
    private valueService: ValueService
    ) {}

  ngOnInit(){
    this.globalService.getSearchList();
  }

  searchTerm: string;
  onBlur(){
    setTimeout(() => {
    this.searchTerm = '';
    }, 200);
  }

  gotoDetail(Id : number){
    this.productService.getProduct(Id);
    this.searchTerm = '';
  }

   
}