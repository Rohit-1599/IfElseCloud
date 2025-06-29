import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss',
})
export class ProgressbarComponent implements OnChanges {
  @Input('data')
  data: number = 0;
  percent: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.data);
    this.percent = changes.data.currentValue + '%';
  }
}
