import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';

import { CoursesCalendarComponent } from './pages/calendar/courses-calendar.component';
import { CourseComponent } from './pages/course/course.component';
import { BookedCourse } from './pages/entites/course';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SchedulerModule,
    CoursesCalendarComponent,
    CourseComponent,
    FormsModule,
    LayoutModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'learning-app';
  bookedCourses: BookedCourse[] = [];

  addBookedCourse(course: BookedCourse) {
    this.bookedCourses = [...this.bookedCourses, course];
  }
}
