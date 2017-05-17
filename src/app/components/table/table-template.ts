import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'table-template',
    templateUrl: 'table-template.html'
})
export class TableTemplateComponent implements OnInit  {

    contentNo: number = -1;

    constructor(private router: ActivatedRoute) {
    }

    ngOnInit() { 
        this.contentNo = this.router.snapshot.params['contentNo'];
    }
}