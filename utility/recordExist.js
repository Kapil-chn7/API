export const IsrecordValid = (err, reply) => {
  if (err.code === "P2025") {
    reply.code(404);
  } else {
    reply.code(500);
  }
};
