import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router }   from '@angular/router';
import { Location }  from '@angular/common';
import { Observable }        from 'rxjs/Observable';

import { Category } from './category';
import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(
      private router: Router,
      private http: Http,
      private location: Location
        ) { };

  categories: Category[];
  getCategories(){ //Virkar
    if(this.categories == undefined){ // til að gera bara kall í api-inn fyrst þegar farið er í categories
      let _url = "http://localhost:56846/api/product/getCategories";
      this.http.get(_url)
        .map(res => res.json())
        .subscribe((cat) => {
          this.categories = cat;
        })   
    }
  }

  productList: Product[];
  getProductList(category) {  //Virkar by category
    this.clearList();
    let getProductsUrl = "http://localhost:56846/api/product/category/" + category;
    this.http.get(getProductsUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.productList = list;
      }) 
  }
  clearList() { //losna við blikk af gomlum lista ef skipt er um cat
        this.productList = [];
  }

  allProductList: Product[];
  getAllProducts(){   //Virkar Get all fyrir Admin
    let getAllUrl = "http://localhost:56846/api/product/allproducts";
    this.http.get(getAllUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.allProductList = list;
      }) 
  }

  popularProductList: Product[];
  getPopularProducts(){   //Virkar Nær í popular og sortar eftir views
    let getPopUrl = "http://localhost:56846/api/product/getpopular";
    this.http.get(getPopUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.popularProductList = list;
      })
  }

  onsaleList: Product[];
  getOnSaleProducts(){  //Virkar Nær í products með discount
    let getSaleUrl = "http://localhost:56846/api/product/getonsale";
    this.http.get(getSaleUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.onsaleList = list;
      }) 
  }

  product: Product;
  getProduct(Id : number){  //Virkar
    this.product = null; //hreinsa gamla til ad losna vid blikk
    this.http.get("http://localhost:56846/api/product/item/"+ Id)
    .map(res => res.json())
    .subscribe((product) => {
      this.product = product; ///þarf að laga ?? er IQueryable... virkar samt
    })
  }

  rateProduct(rating: number){
      let userId = localStorage.getItem('userName');
      let productId = this.product[0].Id;
      if(userId != null){
        let _url = "http://localhost:56846/api/rating/add";
        let body = "ProductId=" + productId + "&UserId=" + userId + "&Rating=" + rating; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            alert('Thanks For Rating');
            this.getProduct(productId);
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
      }else{
        alert('You must log in to rate product');
          this.getProduct(productId);
      }
  }

  toCategoryGrid(categoryName: string){ //Virkar
    this.router.navigate(["store/" + categoryName.toLowerCase() ]);
  }

  toProductDetails(productId){ //Virkar
    this.router.navigate(["store/item/" + productId ]);
  }

  toPopular(){ //Virkar
    this.getPopularProducts();
    this.router.navigate(["selection/popular/"]);
  }
  toSale(){ //Virkar
    this.getOnSaleProducts();
    this.router.navigate(["selection/sale/"]);
  }

  goBack(): void {
      this.location.back();
  }
}
