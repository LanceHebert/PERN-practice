import React, { useState } from "react";

function Input() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:9000/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      window.location = "/"
    } catch (error) {}
  };

  return (
    <>
      <div>Job List</div>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
         
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Input;
