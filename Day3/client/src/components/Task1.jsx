import { useState } from "react";

const Task1 = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [employees, setEmployees] = useState([]);

  const checkdetail = (e) => {
    e.preventDefault();

    setEmployees([...employees, employee]);

    setEmployee({
      name: "",
      department: "",
      salary: ""
    });
  };

  return (
    <>
      <h2>Employee Registration Form</h2>

      <form onSubmit={checkdetail}>
        <input type="text" placeholder="Enter Name" value={employee.name} onChange={(e) => setEmployee({...employee,name: e.target.value })}  />

        <input type="text" placeholder="Enter Department" value={employee.department}onChange={(e) =>setEmployee({...employee,department: e.target.value})}/>

        <input type="number"placeholder="Enter Salary"value={employee.salary}onChange={(e) =>setEmployee({...employee,salary: e.target.value})}/>

        <button type="submit">
          Add Employee
        </button>
      </form>

      <h3>Total Employees: {employees.length}</h3>

      {employees.map((emp, index) => (
        <div key={index}>
          <h4>Name: {emp.name}</h4>
          <p>Department: {emp.department}</p>
          <p>Salary: ₹{emp.salary}</p>
        </div>
      ))}
    </>
  );
};

export default Task1;