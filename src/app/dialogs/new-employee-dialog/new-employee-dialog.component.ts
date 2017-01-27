import { Component, OnInit, Attribute } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { ProductService } from '../../shared/product.service';
import { Staff } from '../../shared/staff';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.css']
})
export class NewEmployeeDialogComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private productService : ProductService
  ) { }

  ngOnInit() {
   
  }

    newStaff: Staff;
    create(name, jobtitle, age, personalQuote, imageUrl){
    let Name: string = name.value;
    let JobTitle: string = jobtitle.value;
    let Age: number = age.value;
    let PersonalQuote: string = personalQuote.value;
    let ImageUrl: string = imageUrl.value;
    
    
    this.adminService.createStaff(Name, JobTitle, Age,  PersonalQuote, ImageUrl);
    }

}
