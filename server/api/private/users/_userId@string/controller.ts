import { defineController } from './$relay';
import { prismaClient } from '$/service/prismaClient';

export default defineController(() => ({
  get: async ({ params }) => {
    const user = await prismaClient.user.findUniqueOrThrow({
      where: { id: params.userId }
    });
    return { status: 200, body: user };
  }
}));
