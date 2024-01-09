import { defineController } from './$relay';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  post: async ({ body }) => {
    const comment = await prismaClient.comment.create({
      data: body
    });
    return { status: 201, body: comment };
  }
}));
