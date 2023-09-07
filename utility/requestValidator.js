export const RequestValidator = (req, reply) => {
  /**uncomment it if you need any other validation 

 const isInArray = ["title", "completed", "createdby"];

 **/

  try {
    const allKeys = Object.keys(req.body);

    if (!allKeys.includes("title")) {
      reply.code(400).send("Title is not given");
    }
  } catch (err) {
    reply.code(500).send("Server Error");
  }
};
