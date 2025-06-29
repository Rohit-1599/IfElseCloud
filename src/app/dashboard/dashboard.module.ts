import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ColchartComponent } from './colchart/colchart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { UserslistComponent } from './userslist/userslist.component';
import { HeadingComponent } from './heading/heading.component';
import { ListComponent } from './userslist/list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ColchartComponent,
    BarchartComponent,
    UserslistComponent,
    HeadingComponent,
    ListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    DashboardComponent,
    NavComponent,
    ColchartComponent,
    BarchartComponent,
    UserslistComponent,
    HeadingComponent,
    ListComponent,
  ],
})
export class DashboardModule {}
