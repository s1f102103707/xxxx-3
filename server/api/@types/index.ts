/* eslint-disable */
export type User = {
  id: string;
  email: string;
  name?: string | null | undefined;
};

export type Post = {
  id: string;
  title: string;
  content?: string | null | undefined;
  published: boolean;
  authorId: string;
  author?: User | undefined;
};

export type PostCreate = {
  title: string;
  content?: string | null | undefined;
  published?: boolean | undefined;
};

export type PostUpdate = {
  title: string;
  content?: string | null | undefined;
  published?: boolean | undefined;
};

export type Comment = {
  id: string;
  text: string;
  postId: string;
  authorId: string;
  author?: User | undefined;
};

export type CommentCreate = {
  text: string;
};

export type CommentUpdate = {
  text: string;
};
