import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.services';
import { CommonProvider } from '../../providers/common-provider';
import { GlobalVariableService } from '../../services/global.variable';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: 'nav.html',
    styleUrls: ['./nav.scss'],
    providers: []
})
export class NavigationComponent implements OnInit  {
    showed_menu: Array<any> = [];
    menu_list: Array<any> = [];
    sub_menu_list: Array<any> = [];
    search_txt: string = '';

    constructor(private http:HttpService, private commonProvider: CommonProvider, private gVar: GlobalVariableService, private router: Router) {
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

    arrMenu(menu: Array<any>, sub_menu: Array<any>) {
        for(var i = 0; i < menu.length; i++) {
            menu[i].list = [];
            for(var j = 0; j < sub_menu.length; j++)
                if(menu[i].id == sub_menu[j].menuNo)
                    menu[i].list.push(sub_menu[j]);
        }
        return menu;
    }

    goDetail(category, contentNo) {
        for(var i = 0; i < this.gVar.category.length; i++) {
            if(this.gVar.category[i].id == category)
                this.router.navigate([this.gVar.category[i].name, contentNo])
        }
    }

    whatClass(category) {
        for(var i = 0; i < this.gVar.category.length; i++) {
            if(this.gVar.category[i].id == category) {
                return this.getIconClass(this.gVar.category[i].name);
            }
        }
    }

    getIconClass(categoryName) {
        switch (categoryName) {
            case 'editor':
                return 'fa-file-text';
            case 'table':
                return 'fa-table';
            case 'accordion':
                return 'fa-expand';
            case 'contact':
                return 'fa-globe';
        }
    }

    search() {
        this.router.navigate(['/search', this.search_txt]);
        this.search_txt = '';
    }
}