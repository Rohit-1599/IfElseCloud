import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import SubscriptionHandler from './assets/services/subscriptionHandler.service';
import { LoaderService } from './assets/services/loader.service';
import { ErrorHandlerService } from './assets/services/errorHandler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  public isloading: boolean | Error = true;

  constructor(
    private sub: SubscriptionHandler,
    private loader: LoaderService,
    private chagedetector: ChangeDetectorRef,
    private errorhandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loader.$loader.pipe(this.sub.takeUntilOrDestroy).subscribe({
      next: (data: boolean) => {
        this.isloading = data;
        this.chagedetector.detectChanges();
        console.log(data);
      },
    });

    this.errorhandler.$handler.pipe(this.sub.takeUntilOrDestroy).subscribe({
      next: (error: Error) => {
        this.isloading = error;
        this.chagedetector.detectChanges();
      },
    });

    setTimeout(() => {
      this.loader.stop();
    }, 3000);
  }
}
