import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { EditorProvider } from '../../providers/editor-provider';
import { ContactProvider } from '../../providers/contact-provider';

declare const naver: any;
declare const $ :any;

@Component({
  selector: 'contact-creator',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})

export class ContactCreateComponent implements OnInit {
  @Input() isEdit: boolean = false;
  @Input() contactNo: number = -1;

  title: string = '';
  contactList: Array<any> = [];

  newTitle: string = '';
  newContent: string = '';
  newTel: string = '';
  newAddr: string = '';
  newAddX: string = '';
  newAddY: string = '';

  constructor(private contactProvider: ContactProvider, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  
  }

  getContact() {
    this.clear();
    this.contactProvider.getContact(this.contactNo)
    .map(data => data.json())
    .subscribe(
      data => {
        this.contactList = data.data;
        this.cdRef.detectChanges();
      }
    )
  }
  editConatact() {
    this.contactProvider.editContact(this.contactNo, this.title)
    .subscribe(
      data => {
        console.log('contact edit success');
      }
    )
  }

  addContactDetail() {
    naver.maps.Service.geocode(
      {
        address: this.newAddr
      }, 
      (status, response) => {
        if (status !== naver.maps.Service.Status.OK) {
            alert('좌표정보를 받아올 수 없습니다. 주소를 확인해주세요.');
        }
        else {
          this.newAddX = response.result.items[0].point.x;
          this.newAddY = response.result.items[0].point.y;
          this.contactProvider.addContactDetail(this.contactNo, this.newTitle, this.newContent, this.newTel, this.newAddX, this.newAddY)
          .subscribe(
            data => {
              console.log('contact detail add success');
              this.getContact();
            }
          );
        }
      }
    );
  }
  editContactDetail(id, title, content, tel) {
    this.contactProvider.editContactDetail(id, title, content, tel)
    .subscribe(
      data => {
        console.log('contact detail edit success');
        this.getContact();
      }
    )
  }
  deleteContactDetail(id) {
    this.contactProvider.deleteContactDetail(id)
    .subscribe(
      data => {
        console.log('contact detail delete success');
        this.getContact();
      }
    )
  }

  clear() {
    this.newAddr = '';
    this.newAddX = '';
    this.newAddY = '';
    this.newContent = '';
    this.newTel = '';
    this.newTitle = '';
  }
}
