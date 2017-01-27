import { Component } from '@angular/core';
import { ValueService } from '../shared/value.service';

@Component({
  selector: 'app-rating-show',
  templateUrl: './rating-show.component.html',
  styleUrls: ['./rating-show.component.css']
})
export class RatingShowComponent {

  constructor(
    private valueService: ValueService
  ) { }

}
