import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  constructor(
    private accountService : AccountService
  ) { }

  ngOnInit() {
  }

  registerNew(email, userName, password, confirmPassword){
    let Email = email.value;
    let UserName = userName.value;
    let Password = password.value;
    let ConfirmPassword = confirmPassword.value;
    this.accountService.register(Email, UserName, Password, ConfirmPassword);
  }

}
