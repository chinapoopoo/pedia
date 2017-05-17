import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'editor-template',
    templateUrl: 'editor-template.html'
})
export class EditorTemplateComponent implements OnInit  {

    contentNo: number = -1;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() { 
        this.contentNo = this.router.snapshot.params['contentNo'];
    }
}