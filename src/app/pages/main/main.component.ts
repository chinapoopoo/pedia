import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  is_show_nav: boolean = true;

  constructor(private router: Router,private http: HttpService) { }

  ngOnInit() {
  }
  login() {
    return this.http.get('/auth/kakao')
        .map(data => {
          data.json()[0]
          alert('1')
        })
        .subscribe(
            data => {
              alert(data)
            }
        );
  }
}
