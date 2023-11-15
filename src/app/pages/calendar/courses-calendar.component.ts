import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MonthViewModule,
  SchedulerModule,
} from '@progress/kendo-angular-scheduler';
import { BookedCourse } from '../entites/course';
import { mapCoursesToSchedulerEvents } from '../utils/utils';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MonthViewModule, SchedulerModule],
  templateUrl: './courses-calendar.component.html',
  styleUrl: './courses-calendar.component.scss',
})
export class CoursesCalendarComponent implements OnChanges {
  @Input({ transform: mapCoursesToSchedulerEvents }) courses: BookedCourse[] =
    [];
  public hasCourses = false;

  ngOnChanges(changes: SimpleChanges): void {
    this.hasCourses = changes['courses'].currentValue.length > 0;
  }
}
