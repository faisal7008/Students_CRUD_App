# Students_CRUD_App

Student CRUD API using MongoDB and Node.js

This is a RESTful API built using MongoDB and Node.js that allows you to perform CRUD (Create, Read, Update, Delete) operations on a list of students.

# Requirements:

To run this application, you'll need to have the following software installed on your machine:

Node.js
MongoDB

# Installation:

1. Clone the repository to your local machine:
    git clone https://github.com/faisal7008/Students_CRUD_App
2. Install the dependencies:
    cd Students_CRUD_App
    npm install
3. Start the MongoDB server:
    mongod
4. Start the Node.js server:
    npm start
5. Now, You can access the server at http://localhost:3001
6. Use a tool like Postman to send HTTP requests to the API endpoints.

# API Endpoints

The following endpoints are available:

POST /students - Create a new student.
GET /students - Get a list of all students.
GET /students/:id - Get the details of a specific student by ID.
PUT /students/:id - Update the details of a specific student by ID.
DELETE /students/:id - Delete a specific student by ID.
