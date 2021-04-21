import React, { useState } from "react";

function Form2(props) {
  const [user, setUser] = useState({
    education: "",
    profession: "",
    city: "",
  });

  //   const [viewUser, setViewUser] = useState([]);

  //previous function
  const handlePrev = () => {
    props.history.push("/");
  };

  //submit function
  const handleSubmit = () => {
    let users = []; //created new array
    let usersData = JSON.parse(localStorage.getItem("user")); //userData is a variable to get the data from LS
    let obj = {}; //created a new object
    obj["education"] = user.education;
    obj["profession"] = user.profession;
    obj["city"] = user.city;
    users.push(...usersData, obj);

    if (usersData.length === 1) {
      let newUser = []; //new  array created for saving the concatination of two objects
      newUser.push(Object.assign({}, ...users)); //concat the users array and push it to the newUser array
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      usersData.push(Object.assign({}, ...user));
      usersData.splice(usersData.length - 2, 1);
      localStorage.setItem("user", JSON.stringify(usersData));
    }
    alert("DATA SAVED", props.history.push("/view")); //save the data and redirect it to the next page
  };

  return (
    <div>
      <form>
        <h2>Step 2</h2>
        <br />
        <input
          type="text"
          placeholder="Education"
          onChange={(e) => setUser({ ...user, education: e.target.value })}
          value={user.education}
        />
        <br />
        <input
          type="text"
          placeholder="Profession"
          onChange={(e) => setUser({ ...user, profession: e.target.value })}
          value={user.profession}
        />
        <br />
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setUser({ ...user, city: e.target.value })}
          value={user.city}
        />
        <br />
        <br />
        <button onClick={handlePrev}>Back</button>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form2;
