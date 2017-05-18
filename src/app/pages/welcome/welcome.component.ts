import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonProvider } from '../../providers/common-provider';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  search_txt: string = '';
  search_result: Array<any> = [];

  constructor(private route: ActivatedRoute, private commonProvider: CommonProvider) { }

  ngOnInit() {
    this.route.params
    .map(data => JSON.parse(JSON.stringify(data)))
    .subscribe(
      data => {
        this.search_txt = data.search;
        if(this.search_txt) {
          this.search();
        }
      }
    );
  }

  search() {
    this.commonProvider.search(this.search_txt)
    .subscribe(
      data => {
        this.search_result = data.json();
      }
    );
  }
}
