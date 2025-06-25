import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class SubscriptionHandler {
  private $subs: Subject<string> = new Subject<string>();

  public handleSub(): void {
    this.$subs.next('stop');
  }
}
