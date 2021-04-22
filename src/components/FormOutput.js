import React, { useEffect, useState } from "react";

function FormOutput(props) {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getUser();
  }, [output]);

  const getUser = () => {
    setOutput(JSON.parse(localStorage.getItem("user")));
  };

  //route to first page
  const firstPage = () => {
    props.history.push("/");
  };

  //DELETE USER
  const deleteUser = (id) => {
    let localData = JSON.parse(localStorage.getItem("user"));
    localData.splice(id, 1);
    localStorage.setItem("user", JSON.stringify(localData));
    console.log(localData);
  };

  //UPDATE USER
  const editUser = () => {
    props.history.push("/form_update");
  };
  return (
    <div>
      <div>
        <button onClick={firstPage}>Home</button>
      </div>
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
        {output.length > 0 ? (
          output.map((value, index) => {
            return (
              <tr>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.gender}</td>
                <td>{value.education}</td>
                <td>{value.profession}</td>
                <td>{value.city}</td>
                <td>
                  <button onClick={() => editUser(index)}>Edit</button>
                  <button onClick={() => deleteUser(index)}>Delete</button>
                </td>
              </tr>
            );
          })
        ) : (
          <h2>Empty List</h2>
        )}
      </table>
    </div>
  );
}

export default FormOutput;
