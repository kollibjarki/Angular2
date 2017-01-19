import { Component, OnInit, Attribute } from '@angular/core';
import { AdminService } from '../../admin.service';
import { ProductService } from '../../product.service';
import { Product } from '../../product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(
    private adminService : AdminService,
    private productService : ProductService
  ) { }

  ngOnInit() {
   
  }

  newProduct: Product;
  create(name,category,price,description,imageUrl){
    let Name: String = name.value;
    let Category: String = category.value;
    let Price: Number = price.value;
    let Description: String = description.value;
    let ImageUrl: String = imageUrl.value;
    let DateCreated =  new Date();
    this.adminService.createProduct(Name,Category,Price,Description,ImageUrl,DateCreated);
  }
  cancel(){
    this.adminService.toAdmin();
  }

}
