const express = require('express');
const app = express();
const port = 4000;


app.get("/signin", (req, res) => {
  res.send('Hello, World!');
})

app.get("/dashboard", (req, res) => {
  res.send('welcome to dashboard area');
})


let studentRecords = [
    { id: 1, name: 'John Doe', studentCourse: 'Web developer', studentLevel: 'Level 4', age: 20 },
    { id: 2, name: 'Jane Smith', studentCourse: 'Data Science', studentLevel: 'Level 3', age: 22 },
    { id: 3, name: 'Alice Johnson', studentCourse: 'Cyber Security', studentLevel: 'Level 2', age: 21 },
    { id: 4, name: 'Bob Brown', studentCourse: 'Software Engineering', studentLevel: 'Level 1', age: 23 },
    { id: 5, name: 'Charlie White', studentCourse: 'Cloud Computing', studentLevel: 'Level 4', age: 24 },
    { id: 6, name: 'David Green', studentCourse: 'AI and Machine Learning', studentLevel: 'Level 3', age: 25 },
    { id: 7, name: 'Eve Black', studentCourse: 'Full Stack Development', studentLevel: 'Level 2', age: 26 },
    { id: 8, name: 'Frank Blue', studentCourse: 'Mobile App Development', studentLevel: 'Level 1', age: 27 },
    { id: 9, name: 'Grace Yellow', studentCourse: 'Game Development', studentLevel: 'Level 4', age: 28 },
    { id: 10, name: 'Hank Purple', studentCourse: 'Blockchain Technology', studentLevel: 'Level 3', age: 29 },
]

app.get("/", (req, res) => {
  res.send(studentRecords);
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});