import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableProvider } from '../../providers/table-provider';

@Component({
    selector: 'table-template',
    templateUrl: 'table-template.html'
})
export class TableTemplateComponent implements OnInit  {
    contentNo: number = -1;
    title: string = '';
    head_list: Array<any> = [];
    body_list: Array<any> = [];
    showed_body_list: Array<any> = [];

    constructor(private router: ActivatedRoute, private tableProvider: TableProvider) {
    }

    ngOnInit() { 
        this.router.params
        .map(data => JSON.parse(JSON.stringify(data)))
        .subscribe(
            data => {
            this.contentNo = data.contentNo;
                this.getTable();
            }
        );
    }

    createShowedBody() {
        var body_length = this.body_list.length;
        var head_length = this.head_list.length;
        var temp: Array<any> = [];

        this.showed_body_list = [];

        for(var i = 0; i < body_length / head_length; i++) {
            temp = [];
            for(var j = i * head_length; j < (i + 1) * head_length; j++) {
                temp.push(this.body_list[j]);
            }
            this.showed_body_list.push(temp);
        }
    }

    getTable() {
        this.tableProvider.getTable(this.contentNo)
        .map(data => data.json())
        .subscribe(
            data => {
                this.body_list = data.body;
                this.head_list = data.head;
                this.title = data.info[0].title;

                this.createShowedBody();
            }
        );
    }
}