import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GridData, UserData } from '../models/grid.model';
import {
  BehaviorSubject,
  catchError,
  finalize,
  interval,
  map,
  Observable,
  tap,
} from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({ providedIn: 'root' })
export class AppService {
  $dataSub: BehaviorSubject<GridData[]> = new BehaviorSubject([]);
  $interval = interval(100);

  // state management using Services
  data: GridData[] = [];

  constructor(private http: HttpClient, private loaderserv: LoaderService) {}

  API: string = 'https://01.fy25ey01.64mb.io/';

  getData(): Observable<GridData[]> {
    return this.http.get<UserData>(this.API).pipe(
      map((data: UserData) => data.grid_data),
      finalize(() => {
        this.loaderserv.$loader.next(false);
      }),
      tap((data: GridData[]) => {
        this.$dataSub.next(data);
        this.data = data;
        return data;
      }),
      catchError((e: Error) => {
        return [];
        1;
      })
    );
  }
}
