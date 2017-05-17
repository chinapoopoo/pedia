import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class TableProvider {

    resource: string = '/table';
    resource2: string = '/table/head';

    constructor(private http: HttpService) { 
        
    }

    getTable(id) {
        return this.http.get(this.resource, {id: id})
    }
    addTable(menuNo, title) {
        return this.http.post(this.resource, {menuNo: menuNo, title: title})
    }
    editTable(id, title) {
        return this.http.put(this.resource, {id: id, title: title})
    }
    deleteTable(id) {
        return this.http.delete(this.resource, {id: id})
    }

    getTableHead(tableNo) {
        return this.http.get(this.resource2, {tableNo: tableNo})
    }
    addTableHead(tableNo, name) {
        return this.http.post(this.resource2, {tableNo: tableNo, name: name})
    }
}