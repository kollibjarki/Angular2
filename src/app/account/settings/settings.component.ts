import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
          private accountService : AccountService,
          private adminService : AdminService,
  ) { }

  ngOnInit() {
  }


  savePassword(oldpassword, newpassword, confirmpassword){
    let OldPassword = oldpassword.value;
    let NewPassword = newpassword.value;
    let ConfirmPassword = confirmpassword.value;
    
    this.adminService.changePassword(OldPassword, NewPassword, ConfirmPassword);
  }

}
