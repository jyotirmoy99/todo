import React, { useState, useEffect } from "react";

function NewForm(props) {
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getUser();
  }, [output]);

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   setOutput(id);
  //   console.log(id);
  // }, [output]);

  const getUser = () => {
    setOutput(JSON.parse(localStorage.getItem("user")));
  };

  //UPDATE

  const handleUpdate = (id) => {
    // let usersUpdate = JSON.parse(localStorage.getItem("user"));
    // usersUpdate.splice(id, 1);
    // localStorage.setItem("user", JSON.stringify(usersUpdate));
    props.history.push("/view");
  };
  return (
    <div>
      <h3>Update Form</h3>
      <form>
        {output.map((value) => {
          return (
            <div>
              <input
                type="text"
                placeholder="name"
                defaultValue={value.name}
                onChange={(e) => setOutput({ ...output, name: e.target.value })}
              />
              <br />
              <input
                type="text"
                placeholder="age"
                defaultValue={value.age}
                onChange={(e) => setOutput({ ...output, age: e.target.value })}
              />
              <br />
              <input
                type="text"
                placeholder="gender"
                defaultValue={value.gender}
                onChange={(e) =>
                  setOutput({ ...output, gender: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                placeholder="education"
                defaultValue={value.education}
                onChange={(e) =>
                  setOutput({ ...output, education: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                placeholder="profession"
                defaultValue={value.profession}
                onChange={(e) =>
                  setOutput({ ...output, profession: e.target.value })
                }
              />
              <br />
              <input
                type="text"
                placeholder="city"
                defaultValue={value.city}
                onChange={(e) => setOutput({ ...output, city: e.target.value })}
              />
              <br />
              <br />
              <button onClick={handleUpdate}>Update</button>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default NewForm;
