import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-rate-product',
  templateUrl: './rate-product.component.html',
  styleUrls: ['./rate-product.component.css']
})
export class RateProductComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
  }

  rate(element: HTMLInputElement): void {
    this.productService.rateProduct(+element.value);
  }

}

