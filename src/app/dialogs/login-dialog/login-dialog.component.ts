import { Component } from '@angular/core';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(
      private accountService : AccountService
  ) { }

  login(userName, password) {
    this.accountService.userLogin(userName, password)
  }
  
}
