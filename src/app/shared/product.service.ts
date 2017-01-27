import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router }   from '@angular/router';
import { Location }  from '@angular/common';
import { Product } from './product';
import { GlobalService } from './global.service';
import { CommentService } from './comment.service';
import { ValueService } from './value.service';
import { MdDialog } from '@angular/material';
import { DynamicDialogComponent } from '../dialogs/dynamic-dialog/dynamic-dialog.component';

@Injectable()
export class ProductService {

  constructor(
      private router: Router,
      private http: Http,
      private location: Location,
      private dialog: MdDialog,
      private globalService: GlobalService,
      private commentService: CommentService,
      private valueService: ValueService
    ) { };

  getCategories(){
    if(this.valueService.categories == undefined){
      let _url = "http://localhost:56846/api/product/getCategories";
      this.http.get(_url)
        .map(res => res.json())
        .subscribe((cat) => {
          this.valueService.categories = cat;
        })   
    }
  }
  clearList(){
    this.valueService.selectedCategoryList == null;
  }
  getProductList(category){
    this.clearList();
    this.valueService.selectedCategoryName = category;
    let getProductsUrl = "http://localhost:56846/api/product/category/" + category;
    this.http.get(getProductsUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.valueService.selectedCategoryList = data},
        err => console.log(err),
        () => this.toCategoryGrid(category)
      );
  }
  toCategoryGrid(categoryName: string){
    this.router.navigate(["selection/" + categoryName.toLowerCase() ]);
  }

  backToCategoryGrid(categoryName: string){
    this.getProductList(categoryName);
    this.router.navigate(["selection/" + categoryName.toLowerCase() ]);
  }
 
  getPopularProducts(){
    this.clearList();
    this.valueService.selectedCategoryName = "popular";
    let getPopUrl = "http://localhost:56846/api/product/getpopular";
    this.http.get(getPopUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.valueService.selectedCategoryList = data},
        err => console.log(err),
        () => this.toPopularProducts()
      );
  }
  toPopularProducts(){
    this.router.navigate(["selection/popular"])
  }

  getOnSaleProducts(){
    this.clearList();
    this.valueService.selectedCategoryName = "on sale";
    let getSaleUrl = "http://localhost:56846/api/product/getonsale";
    this.http.get(getSaleUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.valueService.selectedCategoryList = data},
        err => console.log(err),
        () => this.toOnSaleProducts()
      );
  }
  toOnSaleProducts(){
    this.router.navigate(["selection/sale"]);
  }

  getProduct(Id : number){
    this.http.get("http://localhost:56846/api/product/item/"+ Id)
    .map((res:Response) => res.json())
    .subscribe( (product: Product) =>
      { this.valueService.setActiveProduct(product) },
        err => console.log(err)
        ,
        () => this.toProductDetails(Id)
      );
  }  

  toProductDetails(productId){
    this.commentService.getComments();
    this.router.navigate(["store/item/" + productId ]);
  }

  editProduct(Id: number){
    this.router.navigate(["item/edit/" + Id ]);
  }

  rateProduct(rating: number){
    let productId = this.valueService.activeProduct.value.Id;
    if(this.valueService.isUserLoggedIn.value == true){
        let _url = "http://localhost:56846/api/rating/add";
        let body = "ProductId=" + productId + "&UserId=" + this.valueService.user.userName + "&Rating=" + rating; 
        let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: _headers });
        this.http.post(_url, body, options)
          .subscribe(data => {
            this.valueService.dialogMessage = "Thanks For Rating!";
            this.dialog.open(DynamicDialogComponent);
            this.globalService.closeDialogTimeout();
            this.getProduct(productId);    
          }, error => {
            console.log(JSON.stringify(error.json()));
          });
    }else{
        this.valueService.dialogMessage = "Please Log In to Rate Product";
        this.dialog.open(DynamicDialogComponent);
      }
  }

}

