import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
  showed_body_list: Array<any> = [];
  new_body: Array<any> = [];
  newHead: string = '';
  title: string = '';

  constructor(private tableProvider: TableProvider, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.cdRef.detectChanges();
  }

  createBodyArr() {
    this.new_body = [];
    for(var i = 0; i < this.head_list.length; i++) {
      this.new_body.push(
        {
          order: this.head_list[i].order,
          content: ''
        }
      );
    }
  }
  createShowedBody() {
    var body_length = this.body_list.length;
    var head_length = this.head_list.length;
    var temp: Array<any> = [];

    this.showed_body_list = [];

    for(var i = 0; i < body_length / head_length; i++) {
      temp = [];
      for(var j = i * head_length; j < (i + 1) * head_length; j++) {
        temp.push(this.body_list[j]);
      }
      this.showed_body_list.push(temp);
    }
  }

  getTable() {
    this.tableProvider.getTable(this.tableNo)
    .subscribe(
      data => {
        this.title = data.json().info[0].title;
        this.head_list = data.json().head;
        this.body_list = data.json().body;
        this.createBodyArr();
        this.createShowedBody();
      }
    )
  }

  editTable() {
    this.tableProvider.editTable(this.tableNo, this.title)
    .subscribe(
      data => {
        console.log('table edit success');
      }
    )
  }

  getHead() {
    this.tableProvider.getTableHead(this.tableNo)
    .subscribe(
      data => {
        this.head_list = data.json();
        this.createBodyArr();
      }
    );
  }
  addHead() {
    this.tableProvider.addTableHead(this.tableNo, this.newHead)
    .subscribe(
      data => {
        console.log('헤더 생성 완료.');
        this.newHead = '';
        this.getHead();
      }
    );
  }
  editHead(idx, order) {
    this.tableProvider.editTableHead(this.tableNo, this.head_list[idx].name, order)
    .subscribe(
      data => {
        console.log('헤더 수정 완료.');
        this.getHead();
      }
    );
  }
  deleteHead(order) {
    this.tableProvider.deleteTableHead(this.tableNo, order)
    .subscribe(
      data => {
        console.log('헤더 삭제 완료.');
        this.getHead();
      }
    );
  }

  getBody() {
    this.tableProvider.getTableBody(this.tableNo)
    .subscribe(
      data => {
        this.body_list = data.json();
        this.createShowedBody();
      }
    );
  }
  addBody() {
    this.tableProvider.addTableBody(this.tableNo, this.new_body)
    .subscribe(
      data => {
        console.log('추가완료');
        this.getBody();
        this.createBodyArr();
      }
    );
  }
}
