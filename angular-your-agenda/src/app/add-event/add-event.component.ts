import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';//Connects to local storage
import { TaskEvent } from '../task-event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  today : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
