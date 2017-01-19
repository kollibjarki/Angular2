import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ProductService } from '../../product.service';
import { StaffService } from '../../staff.service';

@Component({
  selector: 'app-admin-staff-grid',
  templateUrl: './admin-staff-grid.component.html',
  styleUrls: ['./admin-staff-grid.component.css']
})
export class AdminStaffGridComponent implements OnInit {

  constructor(   
    private adminService: AdminService,
    private productService : ProductService,
    private staffService : StaffService,

    ) { }

  ngOnInit() {
  }
  editStaff(id: number){
    this.adminService.editStaff(id);
    this.staffService.getStaff(id);
  }
  
}
