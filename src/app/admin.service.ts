import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router }   from '@angular/router';
import 'rxjs/rx';
import { Category } from './category';
import { Product } from './product';
import { ProductService } from './product.service';
import { StaffService } from './staff.service';

@Injectable()
export class AdminService {

  constructor(
      private router: Router,
      private http: Http,
      private productService : ProductService,
      private staffService : StaffService,

        ) { };

  createProduct(Name, Category, Price, Description, ImageUrl, DateCreated) {  //Virkar
    let _url = "http://localhost:56846/api/admin/create";
    let body = "Name=" + Name + "&Category.Name=" + Category + "&ProductInfo.Price=" + Price 
        + "&ProductInfo.Description=" + Description + "&ProductInfo.ImageUrl=" + ImageUrl
        + "&ProductInfo.DateAdded=" + DateCreated;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });

    this.http.post(_url, body, options)
      .subscribe(data => {
          alert('Product Added');
          this.toAdmin();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  editProduct(id: number){
    this.router.navigate(['admin/edit/'+ id ]);
  }

  saveChanges(id, name, categoryId, price, imgUrl, description, discount){
    let _url = "http://localhost:56846/api/admin/edit";
    let body =  "Id=" + id + "&Name=" + name + "&CategoryId=" + categoryId + "&ProductInfo.Price=" + price 
        +"&ProductInfo.ImageUrl=" + imgUrl +"&ProductInfo.Description=" + description + "&ProductInfo.Discount=" + discount ;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
          alert('Changes Saved');
          this.productService.getAllProducts();
          this.router.navigate(['/admin/items']);          
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  deleteProduct(id: number){// Virkar
    let _url = "http://localhost:56846/api/admin/remove/" + id;
    let body = "";
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
          confirm('Product Deleted');
          this.productService.getAllProducts();
          this.router.navigate(["admin/items"]);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  toAdmin(){
    this.router.navigate(["admin"]);
  }

      saveChangesStaff(id, name, jobtitle, age, personalQuote,  imageUrl){
    let _url = "http://localhost:56846/api/staff/edit";
    let body =  "Id=" + id + "&Name=" + name + "&JobTitle=" + jobtitle + "&Age=" + age 
        +"&PersonalQuote=" + personalQuote +"&ImageUrl=" + imageUrl ;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
          alert('Changes Saved');
          this.staffService.getAllStaff();
        
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

    deleteStaff(id: number){// Virkar
    let _url = "http://localhost:56846/api/staff/remove/" + id;
    let body = "";
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    this.http.post(_url, body, options)
      .subscribe(data => {
          confirm('Staff Deleted');
          this.staffService.getAllStaff();
          this.router.navigate(["staff"]);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

    editStaff(id: number){
    this.router.navigate(['admin/editStaff/'+ id ]);
  }

    createStaff(Name, JobTitle, Age, PersonalQuote,  ImageUrl) {  //Virkar
    let _url = "http://localhost:56846/api/staff/create";
    let body = "Name=" + Name + "&JobTitle=" + JobTitle + "&Age=" + Age 
        +"&PersonalQuote=" + PersonalQuote +"&ImageUrl=" + ImageUrl ;
    let _headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });

    this.http.post(_url, body, options)
      .subscribe(data => {
          alert('Staff Added');
          this.toAdmin();
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

    changePassword(OldPassword, NewPassword, ConfirmPassword) {  //Virkar
    let _url = "http://localhost:56846/api/account/ChangePassword";
    let value = localStorage.getItem('access_token');
    let body = "OldPassword=" + OldPassword + "&NewPassword=" + NewPassword + "&ConfirmPassword=" + ConfirmPassword ;
    let _headers = new Headers({'Authorization': "Bearer " + value, 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: _headers });
    console.log(value)
    this.http.post(_url, body, options)
      .subscribe(data => {
          alert('Password Changed');
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

    editUser(id: number){
    this.router.navigate(['edit/'+ id ]);
  }
  
}