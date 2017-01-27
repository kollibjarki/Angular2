import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router }   from '@angular/router';
import { Staff } from './staff';

@Injectable()
export class StaffService {

  constructor(
      private router: Router,
      private http: Http
  ) { }
  
  staff: Staff;
  getStaff(Id : number){
    this.staff = null; 
    this.http.get("http://localhost:56846/api/staff/item/"+ Id)
    .map(res => res.json())
    .subscribe((s) => {
      this.staff = s; 
    })
    this.toStaff(Id);
  }

  editStaff(id: number){
    this.router.navigate(['staff/edit/'+ id ]);
  }
  
  toStaff(id: number){
    this.router.navigate(['staff/'+ id ]);
  }

  toStaffGrid(){
    this.getAllStaff();
    this.router.navigate(['staff/']);
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
