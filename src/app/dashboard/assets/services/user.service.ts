import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridData } from '../../../assets/models/grid.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  user$: BehaviorSubject<GridData> = new BehaviorSubject<GridData>(null);
}
