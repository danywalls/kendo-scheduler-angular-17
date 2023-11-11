import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { BookedCourse, Course } from '../entites/course';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    CommonModule,
    DateInputsModule,
    DropDownListModule,
    LabelModule,
    FormsModule,
    ButtonModule,
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  @Output() addCourse = new EventEmitter<BookedCourse>();
  courseList: Array<Course> = [
    {
      title: 'New Control Flow',
      description: 'New Control Flow Sintax @for and more',
      duration: 2,
    },
    {
      title: 'Deffered Views',
      description: 'Deffered Views',
      duration: 6,
    },
    {
      title: 'Hydration',
      description: 'Hydration',
      duration: 4,
    },
    {
      title: 'SSR',
      description: 'SSR',
      duration: 8,
    },
  ];

  public selectedDate: Date = new Date();
  public selectedCourse = this.courseList[0];
  public dateTimeFormat = 'MM/dd/yyyy HH:mm';

  addToCalendar() {
    const bookedCourse: BookedCourse = {
      when: this.selectedDate,
      title: this.selectedCourse.title,
      description: this.selectedCourse.description,
      duration: this.selectedCourse.duration,
    };

    this.addCourse.emit(bookedCourse);
  }
}
