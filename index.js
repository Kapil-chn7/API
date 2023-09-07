import Fastify from "fastify";
import Routes from "./routes/routerpost.js";
import prismaPlugin from "./database/prisma_connection.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(prismaPlugin);

//registrations
fastify.register(Routes);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
