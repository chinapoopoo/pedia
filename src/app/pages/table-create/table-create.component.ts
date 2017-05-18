import { Component, OnInit, Input } from '@angular/core';
import { TableProvider } from '../../providers/table-provider';

@Component({
  selector: 'table-creator',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.scss']
})
export class TableCreateComponent implements OnInit {
  @Input() tableNo: number = -1;
  head_list: Array<any> = [];
  body_list: Array<any> = [];
  newHead: string = '';

  constructor(private tableProvider: TableProvider) { }

  ngOnInit() {
  
  }

  getHead() {
    this.tableProvider.getTableHead(this.tableNo)
    .subscribe(
      data => {
        this.head_list = data.json();
      }
    )
  }
  addHead() {
    this.tableProvider.addTableHead(this.tableNo, this.newHead)
    .subscribe(
      data => {
        console.log('헤더 생성 완료.');
        this.newHead = '';
        this.getHead();
      }
    )
  }
  editHead(idx, order) {
    this.tableProvider.editTableHead(this.tableNo, this.head_list[idx].name, order)
    .subscribe(
      data => {
        console.log('헤더 수정 완료.');
        this.getHead();
      }
    )
  }
  deleteHead(order) {
    this.tableProvider.deleteTableHead(this.tableNo, order)
    .subscribe(
      data => {
        console.log('헤더 삭제 완료.');
        this.getHead();
      }
    )
  }

  getBody() {
    this.tableProvider.getTableBody(this.tableNo)
    .subscribe(
      data => {
        this.body_list = data.json();
      }
    )
  }
}
