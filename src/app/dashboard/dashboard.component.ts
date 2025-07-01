import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from '../assets/services/loader.service';
import SubscriptionHandler from '../assets/services/subscriptionHandler.service';
import { ErrorHandlerService } from '../assets/services/errorHandler.service';
import { DashboardService } from './assets/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  isloading: boolean = false;
  errormsg: string = '';

  constructor(
    private loader: LoaderService,
    private subs: SubscriptionHandler,
    private changedetector: ChangeDetectorRef,
    private errorhandler: ErrorHandlerService,
    private dashboardserv: DashboardService
  ) {}

  ngOnInit(): void {
    this.loader.$loader.pipe(this.subs.takeUntilOrDestroy).subscribe({
      next: (data: boolean) => {
        this.isloading = data;
        this.changedetector.detectChanges();
      },
    });

    this.errorhandler.$handler.pipe(this.subs.takeUntilOrDestroy).subscribe({
      next: (error: Error) => {
        this.errormsg = error ? error.message : '';
        this.changedetector.detectChanges();
      },
    });
  }

  closeError(): void {
    this.errorhandler.dismissError();
    this.changedetector.detectChanges();
  }
}
