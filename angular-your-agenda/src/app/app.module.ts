import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { DailyComponent } from './daily/daily.component';
import { TaskComponent } from './task/task.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MonthlyComponent,
    WeeklyComponent,
    DailyComponent,
    TaskComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
