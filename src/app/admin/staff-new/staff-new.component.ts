import { Component, OnInit, Attribute } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ProductService } from '../../product.service';
import { Staff } from '../../staff';

@Component({
  selector: 'app-staff-new',
  templateUrl: './staff-new.component.html',
  styleUrls: ['./staff-new.component.css']
})
export class StaffNewComponent implements OnInit {

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
  cancel(){
    this.adminService.toAdmin();
  }
}
