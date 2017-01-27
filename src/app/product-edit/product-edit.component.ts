import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { AdminService } from '../shared/admin.service';
import { ValueService } from '../shared/value.service';
import { GlobalService } from '../shared/global.service';
import { AccountService } from '../shared/account.service';
import { Product } from '../shared/product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private globalService: GlobalService,
    private adminService: AdminService,
    private valueService: ValueService,
    private accountService: AccountService,
  ) { }

  product: Product;
  ngOnInit() {
    if(this.valueService.isAdminLoggedIn.value == false){
      this.globalService.redirect();
    }
    else{
      this.product = this.valueService.activeProduct.value;
    }
  }

  save(id, name, categoryId, price, imgUrl, description, discount): void{
    let Id = id.value;
    let Name = name.value;
    let CategoryId = categoryId.value;
    let Price = price.value;
    let ImgUrl = imgUrl.value;
    let Description = description.value;
    let Discount = discount.value;
    this.adminService.saveChangesProduct(Id ,Name, CategoryId, Price,  ImgUrl, Description, Discount);
  }


  cancel(id): void {
    this.productService.getProduct(id.value);
  }
  
  disable(id){
    this.adminService.diableProduct(id);
  }
}
