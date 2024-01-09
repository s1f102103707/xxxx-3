import { defineController } from './$relay';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  get: async ({ params }) => {
    const post = await prismaClient.post.findUniqueOrThrow({
      where: { id: params.postId }
    });
    return { status: 200, body: post };
  }
}));
