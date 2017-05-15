import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'table-template',
    templateUrl: 'table-template.html'
})
export class TableTemplateComponent implements OnInit, OnChanges  {
    @Input() now: string;

    constructor() {
    }

    ngOnInit() { 

    }

    ngOnChanges() {
        console.log(this.now);
    }
}