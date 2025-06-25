import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [DashboardComponent, NavComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
