import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GridData, UserData } from '../models/grid.model';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  finalize,
  interval,
  map,
  Observable,
  tap,
} from 'rxjs';
import { LoaderService } from './loader.service';
import { ErrorHandlerService } from './errorHandler.service';

@Injectable({ providedIn: 'root' })
export class BaseHttpService {
  $dataSub: BehaviorSubject<GridData[]> = new BehaviorSubject([]);

  // state management using Services
  data: GridData[] = [];

  constructor(
    private http: HttpClient,
    private loaderserv: LoaderService,
    private errorhandler: ErrorHandlerService
  ) {}

  API: string = 'https://01.fy25ey01.64mb.io/';

  getData(): Observable<UserData> {
    return this.http.get<UserData>(this.API);
  }
}
