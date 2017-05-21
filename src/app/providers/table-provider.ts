import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.services';

@Injectable()
export class TableProvider {
    resource: string = '/table';
    resource2: string = '/table/head';
    resource3: string = '/table/body';

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
    editTableHead(tableNo, name, order) {
        return this.http.put(this.resource2, {tableNo: tableNo, name: name, order: order})
    }
    deleteTableHead(tableNo, order) {
        return this.http.delete(this.resource2, {tableNo: tableNo, order: order})
    }

    getTableBody(tableNo) {
        return this.http.get(this.resource3, {tableNo: tableNo})
    }
    addTableBody(tableNo, data) {
        return this.http.post(this.resource3, {tableNo: tableNo, data: data})
    }
    editTableBody(tableNo, row, order, content) {
        return this.http.put(this.resource3, {tableNo: tableNo, row: row, order: order, content: content})
    }
    deleteTableBody(tableNo, row) {
        return this.http.delete(this.resource3, {tableNo: tableNo, row: row})
    }
}