export interface User {
  name: string;
  username: string;
  avatar: string;
}

export interface Post {
  id: number;
  user: User;
  timestamp: string;
  content: string;
  images?: string[];
  hasLink?: boolean;
  link?: string;
  likes: number;
  retweets: number;
  replies: number;
  pinned?: boolean;
}

export interface LiveEvent {
  id: number;
  user: string;
  status: string;
  title: string;
  participants: string[];
  count: number;
}

export interface NewsItem {
  id: number;
  title: string;
  status: string;
  verified?: boolean;
}

