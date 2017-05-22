import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GlobalVariableService } from '../../services/global.variable';
import { Router } from '@angular/router';
import { LoginSession } from '../../services/login.session';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {
  selectedTab: string = 'main';

  constructor(private gVar: GlobalVariableService, private router: Router, private loginSession: LoginSession) { }

  ngOnInit() {
    this.ckNgoLogin();
    this.checkURL();
  }

  ngAfterViewInit() {
    this.checkURL();
  }

  goNav(des: string) {
    if(!this.loginSession.isLoggedIn()) {
      this.router.navigate(['/admin/login']);
      return ;
    }
    this.router.navigate([des]);
  }

  logout() {
    this.loginSession.setLogin(false);
    this.router.navigate(['/']);
  }

  ckNgoLogin() {
    if(!this.loginSession.isLoggedIn()) {
      this.router.navigate(['/admin/login']);
    }
  }

  checkURL() {
    if(this.router.url == '/admin') {
      this.selectedTab = 'main';
    }
    else if(this.router.url == '/admin/list') {
      this.selectedTab = 'list';
    }
    else if(this.router.url == '/admin/login') {
      this.selectedTab = 'login';
    }
    else 
      this.selectedTab = 'write'

    if(!this.loginSession.isLoggedIn())
      this.selectedTab = 'login';
  }
}
