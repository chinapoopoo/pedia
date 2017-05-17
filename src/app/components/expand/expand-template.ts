import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'expand-template',
    templateUrl: 'expand-template.html'
})
export class ExpandTemplateComponent implements OnInit  {

    contentNo: number = -1;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() { 
        this.contentNo = this.router.snapshot.params['contentNo'];
    }
}