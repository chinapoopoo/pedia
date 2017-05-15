import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class HttpService {
    constructor(private http: Http) { }
    public server_addr = '';

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    public post(url: string, body = {}, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.post(this.server_addr + url, body, this.options);
    }

    public put(url: string, body = {}, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.put(this.server_addr + url, body, this.options);
    }

    public delete(url: string, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.delete(this.server_addr + url, this.options);
    }

    public get(url: String, params = {}): Observable<Response> {
        var parameters = new URLSearchParams();
        for (var key in params) {
            parameters.set(key, params[key] + "");
        }
        this.options.search = parameters;
        return this.http.get(this.server_addr + url, this.options);
    }
}
