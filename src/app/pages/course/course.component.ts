import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ANGULAR_V17_FEATURES, BookedCourse } from '../entites/course';
import { ButtonModule } from '@progress/kendo-angular-buttons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [
    CommonModule,
    DateInputsModule,
    DropDownListModule,
    LabelModule,
    ButtonModule,
    FormsModule,
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  @Output() addCourse = new EventEmitter<BookedCourse>();
  courseList = ANGULAR_V17_FEATURES;

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
