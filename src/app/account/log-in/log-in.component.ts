import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(
      private accountService : AccountService
  ) { }

  ngOnInit() {
  }
  login(userName, password) {
        this.accountService.userLogin(userName, password);
  }

}
