import { BookedCourse } from '../entites/course';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

export function calculateCourseEndTime(
  courseDate: Date,
  duration: number,
): Date {
  let newEndTime = new Date(courseDate.getTime());
  newEndTime.setHours(newEndTime.getHours() + duration);
  return newEndTime;
}

export function mapCoursesToSchedulerEvents(
  courses: BookedCourse[],
): SchedulerEvent[] {
  return courses.map((course) => ({
    title: course.title,
    description: course.description,
    start: course.when,
    end: calculateCourseEndTime(course.when, course.duration),
    isAllDay: false,
  }));
}
