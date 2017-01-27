import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { AdminService } from '../../shared/admin.service';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent implements OnInit {

  constructor(
          private accountService : AccountService
  ) { }

  ngOnInit() {
  }

  savePassword(oldpassword, newpassword, confirmpassword){
    let OldPassword = oldpassword.value;
    let NewPassword = newpassword.value;
    let ConfirmPassword = confirmpassword.value;
    this.accountService.changePassword(OldPassword, NewPassword, ConfirmPassword);
  }
  
}
