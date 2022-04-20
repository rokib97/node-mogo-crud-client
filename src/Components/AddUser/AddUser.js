import React from "react";

const AddUser = () => {
  return (
    <div>
      <h2>Please Add a new User</h2>
      <form>
        <input type="text" name="name" id="" required />
        <input type="email" name="email" id="" />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
