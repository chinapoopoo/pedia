import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'editor-template',
    templateUrl: 'editor-template.html'
})
export class EditorTemplateComponent implements OnInit, OnChanges  {
    @Input() now: string;

    constructor() {
    }

    ngOnInit() { 

    }

    ngOnChanges() {
        console.log(this.now);
    }
}