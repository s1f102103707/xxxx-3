import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const post = await prismaClient.post.findUniqueOrThrow({
      where: { id: params.postId },
    });
    return { status: 200, body: post };
  },
}));
