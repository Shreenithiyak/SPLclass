export const students = [
  {
    id: 1,
    name: "Ravi",
    skills: ["HTML", "CSS", "React"],
    company: {
      name: "TCS"
    }
  },
  {
    id: 2,
    name: "Priya",
    skills: ["JavaScript", "Node"],
    company: {}
  }
];
export const calculateTotalMarks = (...marks) => {
  return marks.reduce((total, mark) => total + mark, 0);
};
console.log(students);

console.log(calculateTotalMarks(80, 90, 70, 60));