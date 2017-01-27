import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../shared/value.service';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.css']
})
export class DynamicDialogComponent implements OnInit {

  constructor(
      private valueService: ValueService
  ) { }

  ngOnInit() {
  }

}
