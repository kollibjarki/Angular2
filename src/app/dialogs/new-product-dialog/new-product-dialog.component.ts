import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { AdminService } from '../../shared/admin.service';
import { Product } from '../../shared/product';

@Component({
  selector: 'app-new-product-dialog',
  templateUrl: './new-product-dialog.component.html',
  styleUrls: ['./new-product-dialog.component.css']
})
export class NewProductDialogComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private productService : ProductService
  ) { }

  ngOnInit() {
   this.productService.getCategories();
  }

  create(name,category,price,description,imageUrl){
    let Name: String = name.value;
    let Category: String = category.value;
    let Price: Number = price.value;
    let Description: String = description.value;
    let ImageUrl: String = imageUrl.value;
    let DateCreated =  new Date();
    this.adminService.createProduct(Name,Category,Price,Description,ImageUrl,DateCreated);
  }

}