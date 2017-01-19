import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router }   from '@angular/router';
import { Location }  from '@angular/common';
import { Observable }        from 'rxjs/Observable';

import { Staff } from './staff';
@Injectable()
export class StaffService {

  constructor(
      private router: Router,
      private http: Http,
      private location: Location
  ) { }



  staff: Staff;
  getStaff(Id : number){  //Virkar
    this.staff = null; 
    this.http.get("http://localhost:56846/api/staff/item/"+ Id)
    .map(res => res.json())
    .subscribe((s) => {
      this.staff = s; 
    })
  }

   allStaffList: Staff[];
   getAllStaff(){   
    let getAllUrl = "http://localhost:56846/api/staff/allstaff";
    this.http.get(getAllUrl)
      .map(res => res.json())
      .subscribe((list) => {
        this.allStaffList = list;
      }) 
  }


}
