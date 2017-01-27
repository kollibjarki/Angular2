import { Component, OnInit } from '@angular/core';
import { StaffService } from '../shared/staff.service';
import { GlobalService } from '../shared/global.service';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(
      private valueService : ValueService,
      private globalService : GlobalService,
      private staffService: StaffService
  ) { }

  ngOnInit() {
  }

  edit(id: number){
    this.staffService.editStaff(id);
  }

  goBack(CategoryName){
    if(this.valueService.isAdminLoggedIn.value == false){
      this.globalService.goBack();
    }else{
      this.staffService.toStaffGrid();
    }    
  }

}
