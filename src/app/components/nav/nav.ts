import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpService } from '../../services/http.services';

@Component({
    selector: 'navigation',
    templateUrl: 'nav.html',
    providers: []
})
export class NavigationComponent implements OnInit, OnChanges  {
    menu_list:Array<any> = ['메인', '메뉴', '랜덤', '뽑기'];

    constructor(private http:HttpService) {
    }

    ngOnInit() { 

    }

    ngOnChanges() {
        
    }
}