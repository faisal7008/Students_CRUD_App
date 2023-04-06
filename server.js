const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()
const Student = require('./student');

const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'mongodb://localhost/studentsdb';

const connectDB = async () => {
    try {
      await mongoose.connect(
        process.env.MONGO_URI || mongoURI,
        {
          useNewUrlParser: true
        }
      );
  
      console.log('MongoDB is Connected...');
      // Start the server
      app.listen(process.env.PORT || 3001, () => {
        console.log('Server started');
      });
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
};

connectDB()

// Create a new student
app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a single student
app.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a student
app.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Delete a student
app.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

