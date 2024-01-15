import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ params, body }) => {
    const comment = await prismaClient.comment.create({
      data: {
        text: body.text,
        postId: params.postId,
        userId: body.userId,
      },
    });
    return { status: 201, body: comment };
  },
}));
