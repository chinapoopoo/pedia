import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'accordion-template',
    templateUrl: 'accordion-template.html'
})
export class AccordionTemplateComponent implements OnInit  {

    contentNo: number = -1;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() { 
        this.contentNo = this.router.snapshot.params['contentNo'];
    }
}