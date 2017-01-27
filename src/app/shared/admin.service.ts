import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router }   from '@angular/router';
import { GlobalService } from './global.service';
import { ValueService } from './value.service';
import { ProductService } from './product.service';
import { StaffService } from './staff.service';
import { Observable } from 'rxjs/Rx';
import { Product } from './product';

@Injectable()
export class AdminService {

  constructor(
      private router: Router,
      private http: Http,
      private productService : ProductService,
      private staffService : StaffService,
      private valueService : ValueService,
      private globalService: GlobalService
  ) { };

  createProduct(Name, Category, Price, Description, ImageUrl, DateCreated) {
    let _url = "http://localhost:56846/api/admin/create";
    let body = "Name=" + Name + "&Category.Name=" + Category + "&ProductInfo.Price=" + Price 
        + "&ProductInfo.Description=" + Description + "&ProductInfo.ImageUrl=" + ImageUrl
        + "&ProductInfo.DateAdded=" + DateCreated;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
          this.valueService.dialogMessage = "Product Added";
          this.globalService.openDynamic();
          this.globalService.closeDialogTimeout();          
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }


  saveChangesProduct(id, name, categoryId, price, imgUrl, description, discount){
    let _url = "http://localhost:56846/api/admin/edit";
    let body =  "Id=" + id + "&Name=" + name + "&CategoryId=" + categoryId + "&ProductInfo.Price=" + price 
        +"&ProductInfo.ImageUrl=" + imgUrl +"&ProductInfo.Description=" + description + "&ProductInfo.Discount=" + discount ;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(
        data => { },
        err => console.log(err),
        () => this.productService.getProduct(id)
      );
    }
  
  getAllInActive2():Observable<Product[]>{ // ekki notad
    let getAllInactiveUrl = "http://localhost:56846/api/admin/allinactive";
    return this.http.get(getAllInactiveUrl)
      .map((res:Response) => res.json())
      .catch((error:any) =>
      Observable.throw(error.json().error || 'Server error'));
    }

  getAllInActive3(){ 
    let getAllInactiveUrl = "http://localhost:56846/api/admin/allinactive";
    this.http.get(getAllInactiveUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.valueService.inactiveList = list;
      }) 
  }
  getAllInActive(){
    this.http.get("http://localhost:56846/api/admin/allinactive")
    .map((res:Response) => res.json())
    .subscribe( (list: Product[]) =>
      { this.valueService.inactiveList = list },
        err => console.log(err)
        ,
        () => console.log(this.valueService.inactiveList)
      );
  }  

  diableProduct(id: number){
    let _url = "http://localhost:56846/api/admin/disable/"+ id;
    let body =  "";
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(
        data => { },
        err => console.log(err),
        () => this.disableSuccess()
      );
  }
  disableSuccess(){
    this.valueService.dialogMessage = "Product InActive";
    this.globalService.openDynamic();
    this.productService.getProductList(this.valueService.activeProduct.value.CategoryName);
    this.globalService.toCategory();
    this.globalService.getSearchList();
  }
  enableProduct(id: number){
    let _url = "http://localhost:56846/api/admin/enable/"+ id;
    let body =  "";
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(
        data => { },
        err => console.log(err),
        () => this.enableSuccess()
      );
  }

  enableSuccess(){
    this.getAllInActive();
    this.valueService.dialogMessage = "Product Active";
    this.globalService.openDynamic();
  }

  saveChangesStaff(id, name, jobtitle, age, personalQuote,  imageUrl){
    let _url = "http://localhost:56846/api/staff/edit";
    let body =  "Id=" + id + "&Name=" + name + "&JobTitle=" + jobtitle + "&Age=" + age 
                  +"&PersonalQuote=" + personalQuote +"&ImageUrl=" + imageUrl ;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
          this.valueService.dialogMessage = "Changes Saved";
          this.globalService.openDynamic();          
          this.staffService.getAllStaff();
          this.router.navigate(["staff/" + id]);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  deleteStaff(id: number){
    let _url = "http://localhost:56846/api/staff/remove/" + id;
    let body = "";
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
        this.valueService.dialogMessage = "Staff Deleted";
        this.globalService.openDynamic();
        this.staffService.getAllStaff();
        this.router.navigate(["staff"]);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  createStaff(Name, JobTitle, Age, PersonalQuote,  ImageUrl){
    let _url = "http://localhost:56846/api/staff/create";
    let body = "Name=" + Name + "&JobTitle=" + JobTitle + "&Age=" + Age 
                +"&PersonalQuote=" + PersonalQuote +"&ImageUrl=" + ImageUrl ;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
        this.globalService.closeDialog();
        this.valueService.dialogMessage = "Staff Added";
        this.globalService.openDynamic();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }


}
