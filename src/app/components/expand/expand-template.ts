import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'expand-template',
    templateUrl: 'expand-template.html'
})
export class ExpandTemplateComponent implements OnInit, OnChanges  {
    @Input() now: string;

    constructor() {
    }

    ngOnInit() { 

    }

    ngOnChanges() {
        console.log(this.now);
    }
}