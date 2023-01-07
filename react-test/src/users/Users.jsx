import axios from "axios";
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=5"
    );
    setUsers(resp.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} data-testId="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
