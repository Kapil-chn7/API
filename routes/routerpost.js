import {
  getUserFun,
  getUsersFun,
  addUserFun,
  deleteUser,
  updateUser,
  markComplete,
} from "../controller/RoutesControl.js";
const errorCode500 = {
  error: "Server Error",
};
const errorCode401 = {
  error: "Unauthorized User",
};
const errorCode404 = {
  error: "User Not Found",
};
const userObj = {
  type: "object",
  properties: {
    id: { type: "integer" },
    title: { type: "string" },
    completed: { type: "boolean" },
    dateofcreation: { type: "string" },
    dateofcompletion: { type: "string" },
    createdby: { type: "string" },
    imagelink: { type: "string" },
    numberofdays: { type: "string" },
  },
};

//schemas

//schema for a single user
const getUser = {
  schema: {
    response: {
      200: userObj,
    },
    500: {
      errorCode500,
    },
  },
  handler: getUserFun,
};

//schema to get all users

const getUsers = {
  schema: {
    response: {
      200: {
        type: "array",
        user: userObj,
      },
      500: {
        errorCode500,
      },
    },
  },
  handler: getUsersFun,
};

const addUser = {
  schema: {
    response: {
      200: {
        userObj,
      },
    },
  },
  handler: addUserFun,
};

const Routes = async (fastify, options) => {
  fastify.get("/todo/:id", getUser);
  fastify.get("/todos", getUsersFun);
  fastify.post("/todo", addUser);
  fastify.put("/todo/:id", updateUser);
  fastify.put("/todo/:id/markComplete", markComplete);
  fastify.delete("/todo/:id", deleteUser);
};
export default Routes;
