import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GridData } from '../../../assets/models/grid.model';
import { Status } from '../../../assets/models/enums.model';
import { Role } from '../../../assets/models/role.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  initialdata: GridData = {
    id: '1',
    name: { first_name: 'Rohit', last_name: 'Chaudhari', handle: '@Chaudhari' },
    status: Status.Churned,
    email: 'chaudharirohit1599@gmail.com',
    role: Role.BackendDeveloper,
    license_used: 0,
    teams: [],
  };
  user$: BehaviorSubject<GridData> = new BehaviorSubject<GridData>(
    this.initialdata
  );
}
