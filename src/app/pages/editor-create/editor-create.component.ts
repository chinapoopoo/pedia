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
  @Input() isEdit: boolean = false;
  @Input() contentNo: number = -1;

  constructor(private editorProvider: EditorProvider) { }

  ngOnInit() {
    $.getScript("assets/ckeditor/ckeditor.js", function() { });
  }

  ngAfterViewInit() {
    CKEDITOR.replace('editor1');
  }

  getEditor() {
    this.editorProvider.getEditor(this.contentNo)
    .map(data => data.json()[0])
    .subscribe(
      data => {
        this.title = data.title;
        setTimeout(() => {
          this.setContent(data.content);
        }, 2000);
      }
    );
  }

  getContent() {
    return CKEDITOR.instances['editor1'].getData();
  }
  setContent(content = '') {
    CKEDITOR.instances['editor1'].setData(content);
  }

  saveEditor() {
    if(!this.title) {
      alert('제목을 입력해주세요');
      return ;
    }
    if(this.isEdit) {
      this.editorProvider.editEditor(this.contentNo, this.title, this.getContent())
      .subscribe(
        data => {
          alert('에디터 수정 완료');
        }
      );
    }
    else {
      this.editorProvider.addEditor(this.menuNo, this.title, this.getContent())
      .subscribe(
        data => {
          alert('에디터 저장 완료');
        }
      );
    }
  }
}
