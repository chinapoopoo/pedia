import { Component, OnInit } from '@angular/core';
import { CommonProvider } from '../../providers/common-provider';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  menu_list: Array<any> = [];
  sub_menu_list: Array<any> = [];
  showed_menu: Array<any> = [];

  constructor(private commonProvider: CommonProvider) { }

  ngOnInit() { 
    this.getMenu();
  }

  arrMenu(menu: Array<any>, sub_menu: Array<any>) {
      for(var i = 0; i < menu.length; i++) {
          menu[i].list = [];
          for(var j = 0; j < sub_menu.length; j++)
              if(menu[i].id == sub_menu[j].menuNo)
                  menu[i].list.push(sub_menu[j]);
      }
      return menu;
  }

  getMenu() {
    this.commonProvider.getMenu()
    .subscribe(
      data => {
        this.menu_list = data.json();
        this.commonProvider.getSubMenu()
        .subscribe(
            data => {
                this.sub_menu_list = data.json();
                this.showed_menu = this.arrMenu(this.menu_list, this.sub_menu_list);
            }
        );
      }
    );
  }

  edit(category, contentNo) {

  }
  delete(id) {
    this.commonProvider.deleteSubMenu(id)
    .subscribe(
      data => {
        this.getMenu();
        console.log('삭제완료');
      }
    )
  }
}
