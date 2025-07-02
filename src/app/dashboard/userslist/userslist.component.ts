import { Component, OnInit } from '@angular/core';
import { GridData } from '../../assets/models/grid.model';
import SubscriptionHandler from '../../assets/services/subscriptionHandler.service';
import { DashboardService } from '../assets/services/dashboard.service';
import { LoaderService } from '../../assets/services/loader.service';
import { take, finalize } from 'rxjs';
import { ErrorHandlerService } from '../../assets/services/errorHandler.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.scss',
  providers: [SubscriptionHandler],
})
export class UserslistComponent implements OnInit {
  userlist: GridData[] = [];

  constructor(
    private subs: SubscriptionHandler,
    private dashboardserv: DashboardService,
    private loader: LoaderService,
    private errorserv: ErrorHandlerService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.loader.load();
      this.dashboardserv
        .getUserData()
        .pipe(
          this.subs.takeUntilOrDestroy,
          take(1),
          finalize(() => {
            this.loader.stop();
          })
        )
        .subscribe({
          next: (data) => {
            this.userlist = data;
          },
        });
    }, 3000);

    setTimeout(() => {
      this.errorserv.handleError(
        new Error(
          'Hi, this is just a demostration error. please click close button.'
        )
      );
    }, 7000);
  }
}
