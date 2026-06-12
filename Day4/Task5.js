const students = [
  { id: 1, name: "Arun", mark: 85 },
  { id: 2, name: "Karthik", mark: 45 },
  { id: 3, name: "Vijay", mark: 92 },
  { id: 4, name: "Ajay", mark: 35 }];

const student = students.map((e)=>{
  console.log(`${e.name} - ${e.mark}`);
})
const passed = students.filter((e)=>{
  return e.mark >= 50;
})
console.log(passed);

const people = students.find(
(student) => student.id === 3);
console.log(people);



// Task 5: Student Management System (map + filter + find + reduce) 
// const students = [ { id: 1, name: "Arun", mark: 85 }, { id: 2, name: "Karthik", mark: 45 },
// { id: 3, name: "Vijay", mark: 92 }, { id: 4, name: "Ajay", mark: 35 } ]; Tasks: Display all students using map(). 
// Display only passed students (mark >= 50) using filter(). Find student with id = 3 using find().
//  Calculate total marks using reduce().
//  Calculate average mark using reduce(). 
// Interview Focus: Real-time company question combining all four methods.
