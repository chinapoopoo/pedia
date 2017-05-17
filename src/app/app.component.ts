import { Component } from '@angular/core';
import { GlobalVariableService } from './services/global.variable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private variable: GlobalVariableService) {

  }
}
