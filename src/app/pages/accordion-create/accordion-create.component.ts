import { Component, OnInit, Input } from '@angular/core';
import { AccordionProvider } from '../../providers/accordion-provider';

@Component({
  selector: 'accordion-creator',
  templateUrl: './accordion-create.component.html',
  styleUrls: ['./accordion-create.component.scss']
})
export class AccordionCreateComponent implements OnInit {
  @Input() accordionNo: number = -1;
  @Input() isEdit: boolean = false;

  newTitle: string = '';
  newContent: string = '';
  accordionList: Array<any> = [];
  title: string = '';

  constructor(private accordionProvider: AccordionProvider) { }

  ngOnInit() {
  }

  getAccordion() {
    this.accordionProvider.getAccordionDetail(this.accordionNo)
    .subscribe(
      data => {
        this.accordionList = data.json().body;
        this.title = data.json().info[0].title;
      }
    )
  }
  editAccordionInfo() {
    this.accordionProvider.editAccordion(this.accordionNo, this.title)
    .subscribe(
      data => {
        console.log('어코디언 수정 완료.');
      }
    );
  }
  addAccordion() {
    this.accordionProvider.addAccordionDetail(this.accordionNo, this.newTitle, this.newContent)
    .subscribe(
      data => {
        this.newContent = '';
        this.newTitle = '';
        this.getAccordion();
      }
    )
  }
  editAccordion(id, title, content) {
    this.accordionProvider.editAccordionDetail(id, title, content)
    .subscribe(
      data => {
        this.getAccordion();
      }
    )
  }
  deleteAccordion(id) {
    this.accordionProvider.deleteAccordionDetail(id)
    .subscribe(
      data => {
        this.getAccordion();
      }
    )
  }
}
