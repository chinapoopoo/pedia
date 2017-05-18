import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditorProvider } from '../../providers/editor-provider';

@Component({
    selector: 'editor-template',
    templateUrl: 'editor-template.html'
})
export class EditorTemplateComponent implements OnInit  {
    contentNo: number = -1;
    title: string = '';
    content: string = '';

    constructor(private router: ActivatedRoute, private editorProvider: EditorProvider) {
    }

    ngOnInit() { 
        this.contentNo = this.router.snapshot.params['contentNo'];
        this.getContent();
    }

    getContent() {
        this.editorProvider.getEditor(this.contentNo)
        .map(data => data.json()[0])
        .subscribe(
            data => {
                this.title = data.title;
                this.content = data.content;
                console.log(this.title);
                
            }
        );
    }
}