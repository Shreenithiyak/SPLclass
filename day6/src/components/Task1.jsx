
const Task1 = () => {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Priya", marks: 92 },
    { id: 3, name: "Arun", marks: 45 },
    { id: 4, name: "Karthik", marks: 70 }
  ];

  // Total Marks
  const totalMarks = students.reduce((total, student) => {
    return total + student.marks;
  }, 0);

  // Average Marks
  const averageMarks = totalMarks / students.length;

  // Topper
  const topper = students.reduce((top, student) => {
    return student.marks > top.marks ? student : top;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Exam Result System</h1>

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>Name: {student.name}</h3>
          <p>Marks: {student.marks}</p>

          <p>
            Status:
            {student.marks >= 50 ? " Pass ✅" : " Fail ❌"}
          </p>
        </div>
      ))}

      <hr />

      <h2>Total Marks: {totalMarks}</h2>

      <h2>Average Marks: {averageMarks}</h2>

      <h2>
        Topper: {topper.name} ({topper.marks})
      </h2>
    </div>
  );
};

export default Task1;