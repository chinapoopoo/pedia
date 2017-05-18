import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.services';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private http:HttpService) { }

  ngOnInit() {
  }

}
