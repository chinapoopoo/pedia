import { Component, OnInit, Input } from '@angular/core';
import { AccordionProvider } from '../../providers/accordion-provider';

@Component({
  selector: 'accordion-creator',
  templateUrl: './accordion-create.component.html',
  styleUrls: ['./accordion-create.component.scss']
})
export class AccordionCreateComponent implements OnInit {
  @Input() accordionNo: number = -1;

  newTitle: string = '';
  newContent: string = '';
  accordionList: Array<any> = [];

  constructor(private accordionProvider: AccordionProvider) { }

  ngOnInit() {
  }

  getAccordion() {
    this.accordionProvider.getAccordionDetail(this.accordionNo)
    .subscribe(
      data => {
        this.accordionList = data.json().body;
      }
    )
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
