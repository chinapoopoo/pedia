import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';
import { GlobalVariableService } from '../../services/global.variable';
import { AccordionProvider } from '../../providers/accordion-provider';
import { TableProvider } from '../../providers/table-provider';
import { ActivatedRoute } from '@angular/router';
import { EditorProvider } from '../../providers/editor-provider';
import { EditorCreateComponent } from '../editor-create/editor-create.component';
import { AccordionCreateComponent } from '../accordion-create/accordion-create.component';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})

export class WriterComponent implements OnInit {
  @ViewChild(EditorCreateComponent) editor: EditorCreateComponent;
  @ViewChild(AccordionCreateComponent) accordion: AccordionCreateComponent;

  menu_list: Array<any> = [];
  selectedMenu: number = 0;
  selectedCategory: string = '';
  contentNo: number = -1;
  title: string = '';
  showAccordionEditor: boolean = false;
  createdAccordionNo: number = -1;
  showTableEditor: boolean = false;
  createdTableNo: number = -1;
  isEdit: boolean = false;

  constructor(private commonProvider: CommonProvider, private gVal: GlobalVariableService, private editorProvider: EditorProvider, private accordionProvider: AccordionProvider, private tableProvider: TableProvider, private cdRef: ChangeDetectorRef, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe(
      data => {
        this.selectedCategory = data.category;
        this.contentNo = data.contentNo;
        if(this.contentNo && this.selectedCategory != 'new')
          this.getContent();
      }
    );
    this.getMenu();
    this.cdRef.detectChanges();
  }

  getContent() {
    this.isEdit = true;
    
    switch (this.selectedCategory) {
      case 'editor':
        this.getEditor();
        break;
      case 'accordion':
        this.showAccordionEditor = true;
        this.createdAccordionNo = this.contentNo;
        setTimeout(() => {
          this.accordion.getAccordion();
        }, 0);
        break;    
    }
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

  getEditor() {
    this.editorProvider.getEditor(this.contentNo)
    .map(data => data.json()[0])
    .subscribe(
      data => {
        this.title = data.title;
        setTimeout(() => {
          this.editor.setContent(data.content);
        }, 2000);
      }
    );
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