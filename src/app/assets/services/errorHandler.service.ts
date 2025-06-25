import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  private $handler: Subject<void>;

  public handleError(e: Error): void {
    this.$handler.next();
  }
}
