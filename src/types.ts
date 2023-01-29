export type Card = {
  id: number;
  title: string;
  image: string;
  description: string;
  stack?: string;
  auth?: string;
  link?: string;
  practice?: boolean;
};
