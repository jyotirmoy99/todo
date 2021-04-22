import React, { useState, useEffect } from "react";

function NewForm(props) {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getUser();
  }, [output]);

  const getUser = () => {
    setOutput(JSON.parse(localStorage.getItem("user")));
  };

  //UPDATE

  const handleUpdate = () => {
    props.history.push("/view");
  };
  return (
    <div>
      <h3>Update Form</h3>
      <form>
        <input type="text" placeholder="name" />
        <br />
        <input type="text" placeholder="age" />
        <br />
        <input type="text" placeholder="gender" />
        <br />
        <input type="text" placeholder="education" />
        <br />
        <input type="text" placeholder="profession" />
        <br />
        <input type="text" placeholder="city" />
        <br />
        <br />
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
}

export default NewForm;
