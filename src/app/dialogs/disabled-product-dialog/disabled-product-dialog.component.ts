import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../shared/value.service';
import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-disabled-product-dialog',
  templateUrl: './disabled-product-dialog.component.html',
  styleUrls: ['./disabled-product-dialog.component.css']
})
export class DisabledProductDialogComponent implements OnInit {

  constructor(
    private valueService: ValueService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
  }

  activeProduct(Id){
    this.adminService.enableProduct(Id);
  }
}
