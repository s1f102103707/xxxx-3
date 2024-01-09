import { defineController } from './$relay';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  post: async ({ body }) => {
    const post = await prismaClient.post.create({
      data: body
    });
    return { status: 201, body: post };
  }
}));
