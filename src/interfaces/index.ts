export interface IBlog {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  tag: string[];
  views: number;
  authorId: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  image?: string;
  role?: string;
}
