import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  put: async ({ params, body }) => {
    const post = await prismaClient.post.update({
      where: { id: params.postId },
      data: body,
    });
    return { status: 200, body: post };
  },
  delete: async ({ params }) => {
    await prismaClient.post.delete({
      where: { id: params.postId },
    });
    return { status: 204 };
  },
}));
