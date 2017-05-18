import { Component, OnInit } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';
import { GlobalVariableService } from '../../services/global.variable';
import { AccordionProvider } from '../../providers/accordion-provider';
import { TableProvider } from '../../providers/table-provider';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})

export class WriterComponent implements OnInit {
  menu_list: Array<any> = [];
  selectedMenu: number = 0;
  selectedCategory: string = '';
  title: string = '';
  showAccordionEditor: boolean = false;
  createdAccordionNo: number = -1;
  showTableEditor: boolean = false;
  createdTableNo: number = -1;

  constructor(private commonProvider: CommonProvider, private gVal: GlobalVariableService, private accordionProvider: AccordionProvider, private tableProvider: TableProvider) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu() {
    this.commonProvider.getMenu()
    .subscribe(
      data => {
        this.menu_list = data.json();
        this.selectedMenu = this.menu_list[0].id;
      }
    )
  }

  categoryChanged(value) {
    this.selectedCategory = value;
  }
  changedMenu(value) {
    this.selectedMenu = value;
  }

  createAccordion() {
    this.accordionProvider.addAccordion(this.selectedMenu, this.title)
    .subscribe(
      data => {
        this.createdAccordionNo = data.json().id;
        this.showAccordionEditor = true;
      }
    );
  }
  createTable() {
    this.tableProvider.addTable(this.selectedMenu, this.title)
    .subscribe(
      data => {
        this.createdTableNo = data.json().id;
        this.showTableEditor = true;
      }
    )
  }
}
