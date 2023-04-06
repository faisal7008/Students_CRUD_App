const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollno: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
