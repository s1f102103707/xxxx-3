import { defineController } from './$relay';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  put: async ({ params, body }) => {
    const comment = await prismaClient.comment.update({
      where: { id: params.commentId },
      data: body
    });
    return { status: 200, body: comment };
  },
  delete: async ({ params }) => {
    await prismaClient.comment.delete({
      where: { id: params.commentId }
    });
    return { status: 204 };
  }
}));
