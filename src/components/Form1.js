import React, { useState } from "react";

function Form1(props) {
  const [user, setUser] = useState({ name: "", age: "", gender: "" });

  //save to localStorage
  const handleNext = () => {
    let users = []; //create new array
    let usersData = JSON.parse(localStorage.getItem("user"));
    if (usersData === null) {
      let obj = {}; //create new object
      obj["name"] = user.name;
      obj["age"] = user.age;
      obj["gender"] = user.gender;
      users.push(obj); //push the object to the array
      localStorage.setItem("user", JSON.stringify(users));
    } else {
      let obj = {}; //create new object
      obj["name"] = user.name;
      obj["age"] = user.age;
      obj["gender"] = user.gender;
      usersData.push(obj);
      localStorage.setItem("user", JSON.stringify(usersData));
    }

    // usersData.push(obj);
    // localStorage.setItem("user", JSON.stringify(usersData));
    props.history.push("/form2");
  };

  return (
    <div>
      <form>
        <h2>Step 1</h2>
        <input
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Enter age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Gender"
          value={user.gender}
          name="gender"
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        <br />
        <br />
        <button type="submit" onClick={handleNext}>
          Next
        </button>
      </form>
    </div>
  );
}

export default Form1;
