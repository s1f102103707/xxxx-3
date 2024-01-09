/* eslint-disable */
export type User = {
  id?: string | undefined
  email: string
  name: string
}

export type Post = {
  id?: string | undefined
  title: string
  content?: string | null | undefined
  published?: boolean | undefined
  authorId: string
}

export type Comment = {
  id?: string | undefined
  text: string
  postId: string
  authorId: string
}

export type Category = {
  id?: string | undefined
  name: string
}
