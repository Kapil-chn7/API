import { PrismaClient } from "@prisma/client";

const prismaPlugin = async (server, options) => {
  const prisma = new PrismaClient();

  // Make Prisma Client available through the fastify server instance: server.prisma
  server.decorate("prisma", prisma);

  server.addHook("onClose", async (server) => {
    await server.prisma.$disconnect();
  });
};

export default prismaPlugin;
