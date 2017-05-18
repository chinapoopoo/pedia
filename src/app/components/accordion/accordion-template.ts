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
        this.contentNo = this.router.snapshot.params['contentNo'];
        this.getAccordion();
    }

    getAccordion() {
        this.accordionProvier.getAccordion(this.contentNo)
        .map(data => data.json())
        .subscribe(
            data => {
                console.log(data);
            }
        );
    }
}