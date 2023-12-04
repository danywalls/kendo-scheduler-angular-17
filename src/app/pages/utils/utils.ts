import { BookedCourse } from '../entities/course';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';

export function calculateCourseEndTime(
  courseDate: Date,
  duration: number,
): Date {
  let courseEndTime = new Date(courseDate.getTime());
  courseEndTime.setHours(courseEndTime.getHours() + duration);
  return courseEndTime;
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
