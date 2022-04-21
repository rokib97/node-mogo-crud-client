import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);
  const handleUpdateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const updatedUser = { name, email };

    // send data to the server
    fetch(`http://localhost:5000/user/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("User added Successfully");
        event.target.reset();
      });
  };
  return (
    <div>
      <h2>Updating User: {user.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" required />
        <input type="email" name="email" id="" />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
