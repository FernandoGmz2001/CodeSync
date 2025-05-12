export interface Problem {
  id: string;
  title: string;
  description: string;
  language: string;
  createdAt: Date;
  author: Author;
}

export interface Author {
  id: string;
  username: string;
}
