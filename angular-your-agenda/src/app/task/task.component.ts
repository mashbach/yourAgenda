import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';//Connects to local storage

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
