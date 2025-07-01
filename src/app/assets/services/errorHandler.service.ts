import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  public $handler: Subject<Error> = new Subject<Error>();

  public handleError(e: Error): void {
    this.$handler.next(e);
  }

  public dismissError(): void {
    this.$handler.next(null);
  }
}
