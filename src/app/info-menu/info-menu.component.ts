import { Component } from '@angular/core';
import { DialogService } from '../shared/dialog.service';

@Component({
  selector: 'app-info-menu',
  templateUrl: './info-menu.component.html',
  styleUrls: ['./info-menu.component.css']
})
export class InfoMenuComponent {

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