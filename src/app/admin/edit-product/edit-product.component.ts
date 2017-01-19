import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(
      private productService : ProductService,
      private adminService : AdminService
  ) { }

  ngOnInit() {
  }
  save(id, name, categoryId, price, imgUrl, description, discount){
    let Id = id.value;
    let Name = name.value;
    let CategoryId = categoryId.value;
    let Price = price.value;
    let ImgUrl = imgUrl.value;
    let Description = description.value;
    let Discount = discount.value;
    this.adminService.saveChanges(Id ,Name, CategoryId, Price,  ImgUrl, Description, Discount);
  }
  back(): void {
      this.productService.goBack();
  }
  
  delete(id){
    this.adminService.deleteProduct(id);
  }
}
