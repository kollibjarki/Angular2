import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../shared/basket.service'
import { ValueService } from '../../shared/value.service'

@Component({
  selector: 'app-basket-preview',
  templateUrl: './basket-preview.component.html',
  styleUrls: ['./basket-preview.component.css']
})
export class BasketPreviewComponent implements OnInit {

  constructor(
    private valueService: ValueService
  ) { }

  ngOnInit() {
    if(this.valueService.isUserLoggedIn.value == false){
      //this.accountService.redirect();
    }
  }

}
