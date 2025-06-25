import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './assets/services/app.service';
import SubscriptionHandler from './assets/services/subscriptionHandler.service';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from './assets/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private appservice: AppService,
    private sub: SubscriptionHandler,
    private loader: LoaderService
  ) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.appservice
      .getData()
      .pipe(
        tap(
          (data) => {
            this.loader.$loader.next(true);
          },
          finalize(() => {
            this.sub.handleSub();
          })
        )
      )
      .subscribe({
        next: (e) => {
          console.log(e);
        },
      });
  }
}
