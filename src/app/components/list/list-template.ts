import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'list-template',
    templateUrl: 'list-template.html'
})
export class ListTemplateComponent implements OnInit, OnChanges  {
    @Input() now: string;

    constructor() {
    }

    ngOnInit() { 

    }

    ngOnChanges() {
        console.log(this.now);
    }
}