import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './uicomponents/badge/badge.component';
import { ProgressbarComponent } from './uicomponents/progressbar/progressbar.component';
import { LoadingSpinnerComponent } from './uicomponents/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [BadgeComponent, ProgressbarComponent, LoadingSpinnerComponent],
  imports: [CommonModule],
  exports: [BadgeComponent, ProgressbarComponent, LoadingSpinnerComponent],
})
export class SharedModule {}
