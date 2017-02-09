import { Injectable } from '@angular/core';
import { ValueService } from './value.service';
import { Router }   from '@angular/router';
import { Http }   from '@angular/http';
import { Location }  from '@angular/common';
import { MdDialog } from '@angular/material';
import { DynamicDialogComponent } from '../dialogs/dynamic-dialog/dynamic-dialog.component';

@Injectable()
export class GlobalService {

  constructor(
    private router: Router,
    private http: Http,
    private location: Location,
    private valueService: ValueService,
    private dialog: MdDialog
  ) { }

  loginSuccess(){
    this.valueService.isUserLoggedIn.next(true);
    this.dialog.closeAll();        
    this.valueService.dialogMessage = "Logged In";
    this.dialog.open(DynamicDialogComponent);
    this.closeDialogTimeout();
  }

  fail(message){
    this.valueService.dialogMessage = message;
    this.dialog.open(DynamicDialogComponent);
  }

  openDynamic(){
    this.dialog.open(DynamicDialogComponent);
  }
  
  registerSuccess(){
    this.dialog.closeAll();
    this.valueService.dialogMessage = "Registered";
    this.dialog.open(DynamicDialogComponent);
    this.closeDialogTimeout();
  }

  closeDialogTimeout(){
      setTimeout(() => {
        this.dialog.closeAll();
      }, 2000)
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  sendMessages(message){
    let testMessage = message.replace(/\s/g, '');
    if(testMessage != ""){
      this.valueService.dialogMessage = "Message Sent!";
      this.dialog.open(DynamicDialogComponent);
      this.closeDialogTimeout();
    }
    if(testMessage == ""){
      this.valueService.dialogMessage = "Nothing to send..";      
      this.dialog.open(DynamicDialogComponent);
      this.closeDialogTimeout();      
    }
  }
  getSearchList(){  //Fyrir searchbar
    let getSearchUrl = "http://localhost:56846/api/product/getsearch";
    this.http.get(getSearchUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.valueService.searchList = list;
      }) 
  }

  goBack(){
    this.location.back();
  }

  toCategory(){
    let categoryName = this.valueService.activeProduct.value.CategoryName
    this.router.navigate(["selection/" + categoryName.toLowerCase() ]);
  }

  redirect(){
    this.router.navigate(["store/"]);
  }

}
