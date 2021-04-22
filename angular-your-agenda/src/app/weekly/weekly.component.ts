import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';//Connects to local storage
import { TaskEvent } from '../task-event';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

  today : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
