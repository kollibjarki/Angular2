import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { StaffService } from '../staff.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private accountService : AccountService,
    private staffService : StaffService,

  ) {}


  ngOnInit(): void {
  }
  
  checkAdmin(){
    this.accountService.checkAdmin();
  }

    getAllStaff(){
    this.staffService.getAllStaff();
  }
}
