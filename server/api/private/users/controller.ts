import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  post: async ({ body }) => {
    const user = await prismaClient.user.create({
      data: body,
    });
    return { status: 201, body: user };
  },
}));
