import { Component } from '@angular/core';

import { EventService } from './event.service';//Connects to local storage

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-your-agenda';
}
