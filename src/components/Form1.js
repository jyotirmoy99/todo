import React, { useState, useEffect } from "react";

function Form1(props) {
  const [user, setUser] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const [randomNo, setRandomNo] = useState();

  //RANDOM NUMBER
  useEffect(() => {
    let randomNumber = {
      id: Math.floor(Math.random() * 100),
    };
    setRandomNo(randomNumber);
  }, []);

  //save to localStorage
  const handleNext = () => {
    let users = [];
    let usersData = JSON.parse(localStorage.getItem("user"));
    if (usersData === null) {
      let obj = {};
      obj["name"] = user.name;
      obj["age"] = user.age;
      obj["gender"] = user.gender;
      obj["userID"] = randomNo.id;
      users.push(obj);
      localStorage.setItem("user", JSON.stringify(users));
    } else {
      let obj = {};
      obj["name"] = user.name;
      obj["age"] = user.age;
      obj["gender"] = user.gender;
      obj["userID"] = randomNo.id;
      usersData.push(obj);
      localStorage.setItem("user", JSON.stringify(usersData));
    }

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
