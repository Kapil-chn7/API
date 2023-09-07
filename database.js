let database = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
    dateOfCreation: "2021-01-04T18:07:57.384Z",
    dateOfCompletion: null,
    createdBy: "Sumit Kumar",
    imageLink: "www.emaple.com/image",
  },
  {
    id: 2,
    title: "Finish coding assignment",
    completed: true,
    dateOfCreation: "2023-02-04T18:07:57.384Z",
    dateOfCompletion: "2023-09-04T18:07:57.384Z",
    createdBy: "Sumit Kumar",
    imageLink: "www.emaple.com/image",
  },
  {
    id: 3,
    title: "Call customer support",
    completed: true,
    dateOfCreation: "2023-09-02T18:07:57.384Z",
    dateOfCompletion: "2023-09-04T18:07:57.384Z",
    createdBy: "Sumit Kumar",
    imageLink: null,
  },
];
export default database;

// Insert INTO users (id, title, completed, dateofcreation, dateofcompletion, imagelink, createdby) Values (1,'Buy groceries', false,'2021-01-04T18:07:57.384Z',null,'www.emaple.com/image' ,'Sumit Kumar');
