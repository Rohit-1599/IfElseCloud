import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class SubscriptionHandler implements OnDestroy {
  private $subs: Subject<string> = new Subject<string>();

  public get takeUntilOrDestroy() {
    return takeUntil<any>(this.$subs);
  }

  public ngOnDestroy(): void {
    this.$subs.next('stop');
    this.$subs.complete();
  }
}
