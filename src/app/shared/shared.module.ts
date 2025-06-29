import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './uicomponents/badge/badge.component';
import { ProgressbarComponent } from './uicomponents/progressbar/progressbar.component';

@NgModule({
  declarations: [BadgeComponent, ProgressbarComponent],
  imports: [CommonModule],
  exports: [BadgeComponent, ProgressbarComponent],
})
export class SharedModule {}
