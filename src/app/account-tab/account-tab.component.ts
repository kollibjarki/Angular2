import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { AdminService } from '../shared/admin.service';
import { ValueService } from '../shared/value.service';
import { OrdersService } from '../shared/orders.service';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-account-tab',
  templateUrl: './account-tab.component.html',
  styleUrls: ['./account-tab.component.css']
})
export class AccountTabComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private adminService: AdminService,
    private valueService: ValueService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  openLogIn(){
    this.dialogService.openLoginDialog();
  }

  openRegister(){
    this.dialogService.openRegisterDialog();    
  }

  openPasswordChange(){
    this.dialogService.openChangePasswordDialog();    
  }

  openNewProduct(){
    this.dialogService.openNewProductDialog();  
  }

  openNewEmployee(){
    this.dialogService.openNewEmployeeDialog();  
  }

  getDisabledProducts2(){
    this.adminService.getAllInActive2()
      .subscribe(list => this.valueService.inactiveList = list,
      err => { console.log(err); })
      this.dialogService.openDisabledProductDialog();
  }
    
  getDisabledProducts(){
    this.adminService.getAllInActive();
    this.dialogService.openDisabledProductDialog();
  }

  logOut(){
    this.accountService.logOut();
  }

}
