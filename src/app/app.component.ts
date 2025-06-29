import { Component, OnInit } from '@angular/core';
import { AppService } from './assets/services/app.service';
import SubscriptionHandler from './assets/services/subscriptionHandler.service';
import { finalize, tap } from 'rxjs/operators';
import { LoaderService } from './assets/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public isLoading: boolean = true;

  constructor(
    private appservice: AppService,
    private sub: SubscriptionHandler,
    private loader: LoaderService
  ) {}

  ngOnInit(): void {
    //   this.appservice
    //     .getData()
    //     .pipe(
    //       tap((e) => this.loader.$loader.next(true)),
    //       this.sub.takeUntilOrDestroy,
    //       finalize(() => {
    //         this.loader.$loader.next(false);
    //       })
    //     )
    //     .subscribe({
    //       next: (e) => {
    //         console.log(e);
    //       },
    //     });
    //   this.loader.$loader.pipe(this.sub.takeUntilOrDestroy).subscribe({
    //     next: (data: boolean) => {
    //       this.isLoading = data;
    //     },
    //   });
  }

  clicked(): void {
    this.loader.$loader.next(!this.isLoading);
  }
}
