import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.css']
})
export class RateProductComponent {

  constructor(
    private productService: ProductService
  )  {}

  rate(element: HTMLInputElement): void {
    this.productService.rateProduct(+element.value);
    element.checked == false;
  }

}
