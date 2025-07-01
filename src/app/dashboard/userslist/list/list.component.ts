import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GridData } from '../../../assets/models/grid.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnChanges {
  @Input()
  public user: GridData;

  constructor(private changgedetect: ChangeDetectorRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.changgedetect.detectChanges();
  }
}
