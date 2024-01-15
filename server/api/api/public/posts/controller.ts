import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => {
    const posts = await prismaClient.post.findMany({
      where: { published: true },
      include: { author: true }
    });
    return { status: 200, body: posts };
  }
}));
