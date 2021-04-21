import React, { useEffect, useState } from "react";

function FormOutput() {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getUser();
  }, [output]);

  const getUser = () => {
    setOutput(JSON.parse(localStorage.getItem("user")));
  };
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Education</th>
          <th>Profession</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
        {output.map((value) => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.age}</td>
              <td>{value.gender}</td>
              <td>{value.education}</td>
              <td>{value.profession}</td>
              <td>{value.city}</td>
              <td>
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default FormOutput;
