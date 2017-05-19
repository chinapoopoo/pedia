import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccordionProvider } from '../../providers/accordion-provider';

@Component({
    selector: 'accordion-template',
    templateUrl: 'accordion-template.html'
})
export class AccordionTemplateComponent implements OnInit  {
    contentNo: number = -1;
    content: Array<any> = [];
    title: string = '';

    constructor(private router: ActivatedRoute, private accordionProvier: AccordionProvider) {
    }

    ngOnInit() { 
        this.router.params
        .map(data => JSON.parse(JSON.stringify(data)))
        .subscribe(
            data => {
            this.contentNo = data.contentNo;
                this.getAccordion();
            }
        );
    }

    getAccordion() {
        this.accordionProvier.getAccordion(this.contentNo)
        .map(data => data.json())
        .subscribe(
            data => {
                this.title = data.info[0].title;
                this.content = data.body;
            }
        );
    }
}