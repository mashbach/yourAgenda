import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';//Connects to local storage
import { TaskEvent } from '../task-event';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  today : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
