import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';//Connects to local storage
import { TaskEvent } from '../task-event';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  today : Date = new Date()
  constructor() { }

  ngOnInit(): void {
  }

}
