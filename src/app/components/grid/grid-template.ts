import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'grid-template',
    templateUrl: 'grid-template.html'
})
export class GridTemplateComponent implements OnInit, OnChanges  {
    @Input() now: string;

    constructor() {
    }

    ngOnInit() { 

    }

    ngOnChanges() {
        console.log(this.now);
    }
}