import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/global.service';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {

  constructor(
      private globalService : GlobalService
  ) { }

  ngOnInit() {
  }

  sendMessage(message){
    this.globalService.sendMessages(message.value);
    message.value = '';
  }

}
