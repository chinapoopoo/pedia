import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';
import { GlobalVariableService } from '../../services/global.variable';
import { AccordionProvider } from '../../providers/accordion-provider';
import { TableProvider } from '../../providers/table-provider';
import { ActivatedRoute } from '@angular/router';
import { EditorProvider } from '../../providers/editor-provider';
import { EditorCreateComponent } from '../editor-create/editor-create.component';
import { AccordionCreateComponent } from '../accordion-create/accordion-create.component';
import { TableCreateComponent } from '../table-create/table-create.component';
import { ContactProvider } from '../../providers/contact-provider';
import { ContactCreateComponent } from '../contact-create/contact-create.component';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})

export class WriterComponent implements OnInit {
  @ViewChild(EditorCreateComponent) editor: EditorCreateComponent;
  @ViewChild(AccordionCreateComponent) accordion: AccordionCreateComponent;
  @ViewChild(TableCreateComponent) table: TableCreateComponent;
  @ViewChild(ContactCreateComponent) contact: ContactCreateComponent;

  menu_list: Array<any> = [];
  selectedMenu: number = 0;
  selectedCategory: string = '';
  contentNo: number = -1;
  title: string = '';
  showAccordionEditor: boolean = false;
  createdAccordionNo: number = -1;
  showTableEditor: boolean = false;
  createdTableNo: number = -1;
  showContactEditor: boolean = false;
  createdContactNo: number = -1;
  isEdit: boolean = false;

  constructor(private commonProvider: CommonProvider, private gVal: GlobalVariableService, private editorProvider: EditorProvider, private accordionProvider: AccordionProvider, private tableProvider: TableProvider, private cdRef: ChangeDetectorRef, private router: ActivatedRoute, private contactProvider: ContactProvider) { }

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
        setTimeout(() => {
          this.editor.getEditor();
        }, 0);
        break;
      case 'accordion':
        this.showAccordionEditor = true;
        this.createdAccordionNo = this.contentNo;
        setTimeout(() => {
          this.accordion.getAccordion();
        }, 0);
        break;
      case 'table':
        this.showTableEditor = true;
        this.createdTableNo = this.contentNo;
        setTimeout(() => {
          this.table.getTable();
        }, 0);
        break;
      case 'contact':
        this.showContactEditor = true;
        this.createdContactNo = this.contentNo;
        setTimeout(() => {
          this.contact.getContact();
        }, 0);
        break;
    }
  }

  getMenu() {
    this.commonProvider.getMenu()
    .subscribe(
      data => {
        this.menu_list = data.json();
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
    if(!this.title) {
      alert('제목을 입력해주세요');
      return ;
    }
    this.accordionProvider.addAccordion(this.selectedMenu, this.title)
    .subscribe(
      data => {
        this.createdAccordionNo = data.json().id;
        this.showAccordionEditor = true;
      }
    );
  }

  createTable() {
    if(!this.title) {
      alert('제목을 입력해주세요');
      return ;
    }
    this.tableProvider.addTable(this.selectedMenu, this.title)
    .subscribe(
      data => {
        this.createdTableNo = data.json().id;
        this.showTableEditor = true;
      }
    )
  }

  createContact() {
    if(!this.title) {
      alert('제목을 입력해주세요');
      return ;
    }
    this.contactProvider.addContact(this.selectedMenu, this.title)
    .subscribe(
      data => {
        this.createdContactNo = data.json().id;
        this.showContactEditor = true;
      }
    )
  }
}