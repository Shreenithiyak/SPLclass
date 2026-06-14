// Task 4: Object Destructuring Input
//  const student = { name: "Arun", course: "MERN", city: "Chennai" }; 
//  Task Using Destructuring:
//  Store values into separate variables and print.

const student = { name: "Arun", course: "MERN", city: "Chennai" }; 
const { name, course, city } = student;
const list = { name, course, city };
console.log(list);

