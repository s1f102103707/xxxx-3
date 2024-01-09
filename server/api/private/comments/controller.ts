import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const comment = await prismaClient.comment.create({
      data: body,
    });
    return { status: 201, body: comment };
  },
}));
