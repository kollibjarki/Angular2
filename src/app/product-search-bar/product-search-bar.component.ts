import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Product } from '../product';
import { ProductSearchService } from '../product-search.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.css']
})
export class ProductSearchBarComponent implements OnInit {

 
  products: Observable<Product[]>;

  private searchTerms = new Subject<string>();
  constructor(
    private productSearchService: ProductSearchService,
    private productService: ProductService,
    private router: Router) {}
  // Push a search term into the observable stream.

  search(term: string): void {
    this.searchTerms.next(term);
  }

    ngOnInit(): void {
    this.products = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.productSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Product[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Product[]>([]);
      });
    
  }
}
