import { defineController } from './$relay';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  get: async () => {
    const posts = await prismaClient.post.findMany();
    return { status: 200, body: posts };
  }
}));
