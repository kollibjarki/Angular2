import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-navburger',
  templateUrl: './navburger.component.html',
  styleUrls: ['./navburger.component.css']
})
export class NavburgerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() isClosed = true;
  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  toggle() {
      this.isClosed = !this.isClosed;
      this.isClosed ? this.closed.emit(): this.opened.emit();
  }

}