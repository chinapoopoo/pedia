import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'table-creator',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.scss']
})
export class TableCreateComponent implements OnInit {
  @Input() tableNo: number = -1;

  constructor() { }

  ngOnInit() {
  }

}
