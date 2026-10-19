export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface ArticleSummary {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  views: number;
}