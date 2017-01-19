import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private accountService : AccountService
  ) { }

  ngOnInit() {
  }

 registerNew(email, username, password, confirmPassword){
  let Email = email.value;
  let UserName = username.value;
  let Password = password.value;
  let ConfirmPassword = confirmPassword.value;
  this.accountService.register(Email, UserName, Password, ConfirmPassword);
 }
}
