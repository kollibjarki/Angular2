import { Component } from '@angular/core';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private dialogService: DialogService
  ) { }

  openAboutDialog(){
    this.dialogService.openAboutDialog();
  }

  openContactDialog(){
    this.dialogService.openContactDialog();
  }

}