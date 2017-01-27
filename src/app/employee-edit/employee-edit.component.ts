import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { StaffService } from '../shared/staff.service';
import { ProductService } from '../shared/product.service';
import { GlobalService } from '../shared/global.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  constructor(
      private productService : ProductService,
      private adminService : AdminService,
      private globalService : GlobalService,
      private staffService: StaffService,
  ) { }

  ngOnInit() {
  }
    save(id, name, jobtitle, age, personalQuote,  imageUrl){
    let Id = id.value;
    let Name = name.value;
    let JobTitle = jobtitle.value;
    let Age = age.value;
    let PersonalQuote = personalQuote.value;
    let ImageUrl = imageUrl.value;
    this.adminService.saveChangesStaff(Id ,Name, JobTitle, Age,  PersonalQuote, ImageUrl);
  }

    back(): void {
     this.globalService.goBack();
  }


    delete(id){
    this.adminService.deleteStaff(id);
  }

}
