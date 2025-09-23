export interface IBlog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  tag: string[];
  views: number;
  authorId: number;
}
