import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const handleUSerDelete = (_id) => {
    const procceed = window.confirm("Are you sure want to delete?");
    if (procceed) {
      console.log("deleting", _id);
      const url = `http://localhost:5000/user/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            console.log("deleted");
            const remaining = users.filter((u) => u._id !== _id);
            setUsers(remaining);
          }
        });
    }
  };
  return (
    <div>
      <h2>Available Users: {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}:: {user.email}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleUSerDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
