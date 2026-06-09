import  { useState } from "react";

const Task3 =()=>{
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo Application</h2>

      <input type="text"placeholder="Enter Task"value={task}onChange={(e) => setTask(e.target.value)}/>

      <button onClick={addTask}>Add Task</button>

      <h3>Total Tasks: {tasks.length}</h3>

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteTask(index)}style={{ marginLeft: "10px" }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Task3;