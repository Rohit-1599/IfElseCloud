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
export class AppComponent {
  public isloading: boolean = true;

  constructor(
    private sub: SubscriptionHandler,
    private loader: LoaderService,
    private chagedetector: ChangeDetectorRef,
    private errorhandler: ErrorHandlerService
  ) {}
}
