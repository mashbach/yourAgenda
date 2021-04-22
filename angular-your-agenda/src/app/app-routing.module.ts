import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MonthlyComponent } from './monthly/monthly.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { DailyComponent } from './daily/daily.component';

const routes: Routes = [
  { path: '', redirectTo: '/monthly', pathMatch:'full'},
  { path:'monthly',component: MonthlyComponent },
  { path:'weekly', component: WeeklyComponent },
  { path:'daily', component: DailyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
