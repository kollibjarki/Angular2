import { Component, OnInit } from '@angular/core';
import { StaffService } from '../shared/staff.service';

@Component({
  selector: 'app-employees-grid',
  templateUrl: './employees-grid.component.html',
  styleUrls: ['./employees-grid.component.css']
})
export class EmployeesGridComponent implements OnInit {
  
  constructor(
      private staffService : StaffService
  ) { }

  ngOnInit() {
    this.staffService.getAllStaff();
  }
  
  staffDetail(id: number){
    this.staffService.getStaff(id);
  }

}
