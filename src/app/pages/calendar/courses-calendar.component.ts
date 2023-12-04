import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MonthViewModule,
  SchedulerModule,
} from '@progress/kendo-angular-scheduler';
import { BookedCourse } from '../entities/course';
import { mapCoursesToSchedulerEvents } from '../utils/utils';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, MonthViewModule, SchedulerModule],
  templateUrl: './courses-calendar.component.html',
  styleUrl: './courses-calendar.component.scss',
})
export class CoursesCalendarComponent {
  @Input({ transform: mapCoursesToSchedulerEvents }) courses: BookedCourse[] =
    [];
}
