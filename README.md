# API
This is an API for crud, operations using fastify, prisma, Postgresql, and javascript


# Steps to run this project
1. Clone it in your local system (using git clone https://github.com/Kapil-chn7/API)
2. Run npm install to add all of my dependencies
3. Then setup your postgresql database connection string (See my .env file to get idea)
4. Then setup create prisma schema
5. Run NPM run dev

#Operations that you can perform

FORMAT of data

{id: number (unique identifier)
title: string (title of the todo item)
completed: boolean (boolean indicating whether the todo is completed or not)
dateofcreation: date (date of todo creation)
dateofcompletion: date | optional (date of completion)
imagelink: string | optional}

Operations 

1. Add USER (Title Mandatory)
2. Get User with ID
3. Get Users with Some Criteria( Sort on the basis of dateofcompletion, name, dateofcreation, completed)
4. Update an existing User
5. Update completed value
6. Delete a User





# This is the Rest Client in VS code which you can use with creating  file named ".http" or you can use POSTMAN

Here I'm giving code for ".http" Rest Client

### Request 1
GET http://localhost:3000/todo/1


### Request 2
GET http://localhost:3000/todos?createdby=Kapil




### Request 3
POST http://localhost:3000/todo HTTP/1.1
Content-Type: application/json

{
    "createdby":"Mohan",
    "title":"Good",
    "completed":true
    
  
   
}

### Request 2
DELETE  http://localhost:3000/todo/2


### Request 5
PUT http://localhost:3000/todo/1 HTTP/1.1
Content-Type: application/json

{
    "createdby":"Kapil Chauhan",
    "completed":true,
    "title":"Singer"
  
   
}


### Request 5
PUT http://localhost:3000/todo/1/markComplete HTTP/1.1
Content-Type: application/json

{
  
    "completed":false,
    "title":"Singer"
  
   
}
### Request 1
GET http://localhost:3000/todo/1


### Request 2
GET http://localhost:3000/todos?createdby=Kapil




### Request 3
POST http://localhost:3000/todo HTTP/1.1
Content-Type: application/json

{
    "createdby":"Mohan",
    "title":"Good",
    "completed":true
    
  
   
}

### Request 2
DELETE  http://localhost:3000/todo/2


### Request 5
PUT http://localhost:3000/todo/1 HTTP/1.1
Content-Type: application/json

{
    "createdby":"Kapil Chauhan",
    "completed":true,
    "title":"Singer"
  
   
}


### Request 5
PUT http://localhost:3000/todo/1/markComplete HTTP/1.1
Content-Type: application/json

{
  
    "completed":false,
    "title":"Singer"
  
   
}


It gives me results and it also handles erros incase if there are any with respect to validation and server error.




