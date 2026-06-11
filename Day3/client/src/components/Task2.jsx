import { useEffect, useState } from "react";
import axios from "axios";

const Task2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=3");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching users");
        console.error(error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Task2;