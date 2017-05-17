import { Injectable } from '@angular/core';
import { HttpService } from './http.services';

@Injectable()
export class GlobalVariableService {
    category: Array<any> = [];

    constructor(private http:HttpService){
        this.getCategory();
    }

    getCategory() {
        this.http.get('/category')
        .subscribe(
            data => {
                this.category = data.json();
            }
        )
    }
}