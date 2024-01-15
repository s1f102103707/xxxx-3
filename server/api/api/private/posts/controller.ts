import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const post = await prismaClient.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published ?? false,
        authorId: body.authorId
      },
    });
    return { status: 201, body: post };
  },
}));
