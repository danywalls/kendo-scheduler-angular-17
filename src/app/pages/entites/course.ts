export type Course = {
  title: string;
  duration: number;
  description: string;
}

export type BookedCourse = Course & {
  when: Date
}
