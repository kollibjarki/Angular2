import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-edit-delete-product',
  templateUrl: './edit-delete-product.component.html',
  styleUrls: ['./edit-delete-product.component.css']
})
export class AdminProductGrid implements OnInit {

  constructor(
    private adminService: AdminService,
    private productService : ProductService
  ) { }

  ngOnInit() {
  }
  editProduct(id: number){
    this.adminService.editProduct(id);
    this.productService.getProduct(id);
  }

}
