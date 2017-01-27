import { Component, OnInit } from '@angular/core';
import { DialogService } from '../shared/dialog.service';
import { GlobalService } from '../shared/global.service';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private globalService: GlobalService,
    private valueService: ValueService
  ) { }

  ngOnInit() {
  }

  openNewProduct(){
    this.dialogService.openNewProductDialog();
  }

  openNewEmployee(){
    this.dialogService.openNewEmployeeDialog();  
  }

  getDisabledProducts(){
    this.dialogService.openDisabledProductDialog();
  }
  
  logIn(){
    this.dialogService.openLoginDialog();
  }


}
