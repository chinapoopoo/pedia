import { Component, OnInit } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';

@Component({
  selector: 'app-menu-setting',
  templateUrl: './menu-setting.component.html',
  styleUrls: ['./menu-setting.component.css']
})
export class MenuSettingComponent implements OnInit {
  menu_list: Array<any> = [];
  newMenu: string = '';

  constructor(private commonProvider: CommonProvider) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.commonProvider.getMenu()
    .subscribe(
      data => {
        this.menu_list = data.json();
      }
    );
  }
  add() {
    this.commonProvider.addMenu(this.newMenu)
    .subscribe(
      data => {
        console.log('메뉴추가완료');
        this.newMenu = '';
        this.get();
      }
    )
  }
  edit(id, name) {
    this.commonProvider.editMenu(id, name)
    .subscribe(
      data => {
        console.log('메뉴수정완료');
        this.get();
      }
    )
  }
  delete(id) {
    this.commonProvider.deleteMenu(id)
    .subscribe(
      data => {
        console.log('메뉴삭제완료');
        this.get();
      }
    )
  }
}
