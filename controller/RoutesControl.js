import { RequestValidator } from "../utility/requestValidator.js";
import { PrismaClient } from "@prisma/client";
import { IsrecordValid } from "../utility/recordExist.js";

// Use prisma to interact with your database
const prisma = new PrismaClient();

export const getUserFun = async (req, reply) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);

    const user = await prisma.users.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      reply.code(404).send({ error: "user not found" });
    } else {
      const timeDifference = Math.floor(
        (new Date() - new Date(user.dateofcreation)) / (1000 * 60 * 60 * 24)
      );

      user["numberofdays"] = timeDifference;

      reply.code(200).send(user);
    }
  } catch (err) {
    reply.code(500);
  }
};
export const getUsersFun = async (req, reply) => {
  try {
    const {
      completed,
      createdby,
      dateofcreation,
      dateofcompletion,
      sortByDateofcreation,
      sortByDateofcompletion,
    } = req.query;

    const where = {};

    // Filtering based on completed status
    if (completed !== undefined) {
      where.completed = completed === "true";
    }

    // Filtering based on createdBy
    if (createdby !== undefined) {
      where.createdby = createdby;
    }

    // Filtering based on dateOfCreation
    if (dateofcreation !== undefined) {
      where.dateofcreation = new Date(dateofcreation);
    }

    // Filtering based on dateofcompletion
    if (dateofcompletion !== undefined) {
      where.dateofcompletion = new Date(dateofcompletion);
    }

    // Sorting options
    const orderBy = [];

    if (sortByDateofcreation !== undefined) {
      orderBy.push({ dateofcreation: sortByDateofcreation });
    }

    if (sortByDateofcompletion !== undefined) {
      orderBy.push({ dateofcompletion: sortByDateofcompletion });
    }

    // Query the database
    const filteredTodos = await prisma.users.findMany({
      where,
      orderBy,
    });

    // Count completed and not completed todos
    const completedCount = filteredTodos.filter(
      (todo) => todo.completed
    ).length;
    const notCompletedCount = filteredTodos.filter(
      (todo) => !todo.completed
    ).length;

    reply.code(200).send({
      filteredTodos,
      completedCount,
      notCompletedCount,
    });
  } catch (err) {
    console.log("This is the error ", err);
    reply.code(500);
  }
};

export const addUserFun = async (req, reply) => {
  try {
    RequestValidator(req, reply);
    if (req.body.id) {
      req.body.id = parseInt(req.body.id, 10);
    }

    const user = await prisma.users.create({ data: { ...req.body } });
    reply.code(200).send(user);
  } catch (err) {
    reply.code(500);
  }
};

export const deleteUser = async (req, reply) => {
  try {
    let { id } = req.params;
    id = parseInt(id, 10);
    if (id != null) {
      const deleted = await prisma.users.delete({
        where: { id: id },
      });
      if (deleted) {
        reply.send("Deleted Successfully");
      }
    } else {
      reply.code(400);
    }
  } catch (err) {
    IsrecordValid(err, reply);
  }
};
export const updateUser = async (req, reply) => {
  try {
    RequestValidator(req, reply);

    let { id } = req.params;
    id = parseInt(id, 10);

    const updateUsers = await prisma.users.update({
      where: {
        id,
      },
      data: { ...req.body },
    });

    reply.code(200).send(updateUsers);
  } catch (err) {
    IsrecordValid(err, reply);
  }
};
export const markComplete = async (req, reply) => {
  try {
    RequestValidator(req, reply);

    let { id } = req.params;
    id = parseInt(id, 10);

    const updateUsers = await prisma.users.update({
      where: {
        id,
      },
      data: { ...req.body },
    });

    reply.code(200).send(updateUsers);
  } catch (err) {
    IsrecordValid(err, reply);
  }
};
