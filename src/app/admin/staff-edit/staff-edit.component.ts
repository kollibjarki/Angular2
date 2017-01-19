import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ProductService } from '../../product.service';
import { AccountService } from '../../account.service';
import { StaffService } from '../../staff.service';

@Component({
  selector: 'app-staff-edit',
  templateUrl: './staff-edit.component.html',
  styleUrls: ['./staff-edit.component.css'],
})
export class StaffEditComponent implements OnInit {


  constructor(
      private productService : ProductService,
      private adminService : AdminService,
      private accountService: AccountService,
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
      this.productService.goBack();
  }
  
  delete(id){
    this.adminService.deleteStaff(id);
  }
}
