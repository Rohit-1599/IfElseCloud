import { Component, OnChanges, Input } from '@angular/core';
import { of } from 'rxjs';
import { badgeColorModel } from './models/badge.model';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
})
export class BadgeComponent implements OnChanges {
  @Input('data')
  data: string;
  // userdata: Observable<BadgeModel>;

  @Input('show')
  show: boolean;

  @Input('color')
  usercolor: badgeColorModel;

  none: boolean;

  constructor() {
    this.data = '';
    this.show = false;
    this.usercolor = null;
  }

  ngOnChanges(): void {
    if (this.data != 'customer' && this.data != 'churned') this.none = true;
    // this.userdata = of({
    //   status: 'Customer',
    //   role: 'Web Developer',
    //   email: 'chaudharirohit@1599@gmail.com',
    //   teams: ['UI/UX', 'Frontend', 'Web Dev'],
    // });

    console.log(this.data);
    console.log(this.show);
    console.log(this.usercolor);
  }
}
