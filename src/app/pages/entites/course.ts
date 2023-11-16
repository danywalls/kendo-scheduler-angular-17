export type Course = {
  title: string;
  duration: number;
  description: string;
};

export type BookedCourse = Course & {
  when: Date;
};

export const ANGULAR_V17_FEATURES: Array<Course> = [
  {
    title: 'New Control Flow',
    description: 'New Control Flow Syntax @for and more',
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
