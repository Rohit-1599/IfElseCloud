import {
  Component,
  OnChanges,
  Input,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { badgeColorModel, BadgeModel } from './models/badge.model';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent implements OnChanges {
  @Input()
  data: string;
  @Input()
  show: boolean = false;

  usercolor: badgeColorModel;

  constructor(private changedetect: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    const data = changes?.data?.currentValue;
    if (typeof data != 'string') {
      this.usercolor = data;
      return;
    } else {
      this.data = data;
    }
    this.changedetect.detectChanges();
  }
}
