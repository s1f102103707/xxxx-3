import { prismaClient } from '$/service/prismaClient';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await prismaClient.user.findUniqueOrThrow({
      where: { id: params.userId },
    });
    return { status: 200, body: user };
  },
}));
