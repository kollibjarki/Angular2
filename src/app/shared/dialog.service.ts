import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AboutDialogComponent } from '../dialogs/about-dialog/about-dialog.component';
import { ContactDialogComponent } from '../dialogs/contact-dialog/contact-dialog.component';
import { LoginDialogComponent } from '../dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../dialogs/register-dialog/register-dialog.component';
import { ChangePasswordDialogComponent } from '../dialogs/change-password-dialog/change-password-dialog.component';
import { NewProductDialogComponent } from '../dialogs/new-product-dialog/new-product-dialog.component';
import { NewEmployeeDialogComponent } from '../dialogs/new-employee-dialog/new-employee-dialog.component';
import { DisabledProductDialogComponent } from '../dialogs/disabled-product-dialog/disabled-product-dialog.component';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MdDialog
  ) { }

  openAboutDialog(){
    this.dialog.open(AboutDialogComponent);
  }

  openContactDialog(){
    this.dialog.open(ContactDialogComponent);
  }

  openLoginDialog(){
    this.dialog.open(LoginDialogComponent);
  }

  openRegisterDialog(){
    this.dialog.open(RegisterDialogComponent);
  }

  openChangePasswordDialog(){
    this.dialog.open(ChangePasswordDialogComponent);
  }

  openNewProductDialog(){
    this.dialog.open(NewProductDialogComponent);
  }

  openNewEmployeeDialog(){
    this.dialog.open(NewEmployeeDialogComponent);
  }
  
  openDisabledProductDialog(){
    this.dialog.open(DisabledProductDialogComponent);
  }

  closeDialogTimeout(){
      setTimeout(() => {
        this.dialog.closeAll();
      }, 2000)
  }
}
