import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ProductService } from '../../product.service';
import { StaffService } from '../../staff.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private productService : ProductService,
    private staffService : StaffService,

  ) { }

  ngOnInit() {
  }

  getAllProducts(){
    this.productService.getAllProducts();
  }
      getAllStaff(){
    this.staffService.getAllStaff();
  }
}
