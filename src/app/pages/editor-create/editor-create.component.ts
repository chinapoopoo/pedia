import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { EditorProvider } from '../../providers/editor-provider';

declare let CKEDITOR:any;
declare let $:any;

@Component({
  selector: 'editor-creator',
  templateUrl: './editor-create.component.html',
  styleUrls: ['./editor-create.component.scss']
})
export class EditorCreateComponent implements OnInit, AfterViewInit {
  @Input() menuNo: number = 0;
  @Input() title: string = '';

  constructor(private editorProvider: EditorProvider) { }

  ngOnInit() {
    $.getScript("assets/ckeditor/ckeditor.js", function() { });
  }

  ngAfterViewInit() {
    CKEDITOR.replace('editor1');
  }

  getContent() {
    return CKEDITOR.instances['editor1'].getData();
  }
  setContent(content = '') {
    CKEDITOR.instances['editor1'].setData(content);
  }

  saveEditor() {
    this.editorProvider.addEditor(this.menuNo, this.title, this.getContent())
    .subscribe(
      data => {
        console.log('에디터 저장 완료');
      }
    )
  }
  deleteEditor() {
  }
}
