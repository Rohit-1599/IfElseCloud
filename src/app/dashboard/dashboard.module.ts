import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ColchartComponent } from './colchart/colchart.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    ColchartComponent,
    BarchartComponent,
  ],
  imports: [CommonModule],
  exports: [DashboardComponent, NavComponent, ColchartComponent],
})
export class DashboardModule {}
