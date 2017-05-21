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
    return this.http.get('https://kauth.kakao.com/oauth/authorize?client_id=85c381111c1777518b08a613177097d8&redirect_uri=/oauth&response_type=code')
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
