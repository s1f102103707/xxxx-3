import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const post = await prismaClient.post.create({
      data: body,
    });
    return { status: 201, body: post };
  },
}));
