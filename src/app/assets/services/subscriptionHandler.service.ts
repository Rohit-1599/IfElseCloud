import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable()
export class SubscriptionHandler implements OnDestroy {
  $subs: Subject<void> = new Subject<void>();

  public get takeUntilOrDestroy() {
    return takeUntil<any>(this.$subs);
  }

  public ngOnDestroy(): void {
    this.$subs.next();
    this.$subs.complete();
  }
}
