import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-rating-show',
  templateUrl: './rating-show.component.html',
  styleUrls: ['./rating-show.component.css']
})
export class RatingShowComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

}
