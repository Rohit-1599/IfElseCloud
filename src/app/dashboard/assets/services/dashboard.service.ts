import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../assets/services/baseHttp.service';
import { GridData, UserData } from '../../../assets/models/grid.model';
import { map, Observable, BehaviorSubject, of, tap } from 'rxjs';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private end: number = 10;
  private start: number = 1;
  private store: GridData[] = [];

  dashbord$: BehaviorSubject<GridData[]> = new BehaviorSubject<GridData[]>(
    this.store
  );

  constructor(private http: BaseHttpService, private userserv: UserService) {}

  public getUserData(): Observable<GridData[]> {
    return this.http.getData().pipe(
      map((data: any) => {
        this.store = data;
        this.userserv.user$.next(this.store[1]);
        this.dashbord$.next(this.store.slice(0, 10));
        return this.store.slice(0, 10);
      })
    );
  }

  public getNextPage(): Observable<GridData[]> {
    this.start = this.end + 1;
    this.end = this.start + 10;
    return of(this.store.slice(this.start, this.end));
  }

  public getPreviousPage(): Observable<GridData[]> {
    this.end = this.start;
    this.start = this.start - 1;
    if (this.start >= 0) {
      return of(this.store.slice(this.start, this.end));
    }
    return of(this.store.slice(1, 10));
  }
}
