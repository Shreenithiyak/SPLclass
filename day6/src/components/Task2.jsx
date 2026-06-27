import { useState } from "react";

const Task2 = () => {
  const [employee, setEmployee] = useState({
    name: "",
    checkIn: "",
    checkOut: "",
  });

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmployees([
      ...employees,
      {
        ...employee,
        status: employee.checkIn && employee.checkOut ? "Present" : "Absent",
      },
    ]);

    setEmployee({
      name: "",
      checkIn: "",
      checkOut: "",
    });
  };

  const presentEmployees = employees.filter(
    (emp) => emp.status === "Present"
  );

  const absentEmployees = employees.filter(
    (emp) => emp.status === "Absent"
  );

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Attendance Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Employee Name"
          value={employee.name}
          onChange={(e) =>
            setEmployee({ ...employee, name: e.target.value })
          }
        />

        <input
          type="time"
          value={employee.checkIn}
          onChange={(e) =>
            setEmployee({ ...employee, checkIn: e.target.value })
          }
        />

        <input
          type="time"
          value={employee.checkOut}
          onChange={(e) =>
            setEmployee({ ...employee, checkOut: e.target.value })
          }
        />

        <button type="submit">Add Employee</button>
      </form>

      <br />

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h2>Total Present: {presentEmployees.length}</h2>

      <h2>Employee List</h2>

      {filteredEmployees.map((emp, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{emp.name}</h3>
          <p>Check In: {emp.checkIn || "-"}</p>
          <p>Check Out: {emp.checkOut || "-"}</p>
          <p>Status: {emp.status}</p>
        </div>
      ))}

      <hr />

      <h2>Present Employees</h2>

      {presentEmployees.map((emp) => (
        <p key={emp.name}>{emp.name}</p>
      ))}

      <h2>Absent Employees</h2>

      {absentEmployees.length === 0 ? (
        <p>No Absent Employees</p>
      ) : (
        absentEmployees.map((emp) => (
          <p key={emp.name}>{emp.name}</p>
        ))
      )}
    </div>
  );
};

export default Task2;