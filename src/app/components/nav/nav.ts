import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpService } from '../../services/http.services';
import { CommonProvider } from '../../providers/common-provider';

@Component({
    selector: 'navigation',
    templateUrl: 'nav.html',
    providers: []
})
export class NavigationComponent implements OnInit, OnChanges  {
    showed_menu: Array<any> = [];
    menu_list: Array<any> = [];
    sub_menu_list: Array<any> = [];

    constructor(private http:HttpService, private commonProvider: CommonProvider) {
    }

    ngOnInit() { 
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

    ngOnChanges() {
        
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
}