import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

//MODAL CUSTOM STYLE
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 500,
  },
};

function Table() {
  const [submitteddata, setSubmittedata] = useState([]);
  let [formdata, setFormdata] = useState({});
  const [arr, setArr] = useState([]);
  let [idx, setIdx] = useState(null);

  //modal
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    getLocalStorageData();
  }, [submitteddata, idx]);

  const getLocalStorageData = () => {
    let localDB = JSON.parse(localStorage.getItem("user"));
    setSubmittedata(localDB);
  };

  //DELETE USER
  const deleteUser = (id) => {
    setSubmittedata(submitteddata.splice(id, 1));
    localStorage.setItem("user", JSON.stringify(submitteddata));
  };

  //UPDATE USER
  const handleUpdate = (index) => {
    let data = JSON.parse(localStorage.getItem("user"));
    data.splice(index, 1, formdata);
    localStorage.setItem("user", JSON.stringify(data));
    setIsopen(false);
  };

  //EDIT USER
  const handleEdit = (value, index) => {
    let obj = submitteddata[index];
    formdata = { ...obj };
    console.log(formdata);
    setIsopen(true);
    setIdx(index);
    arr.splice(0, 1, value);
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <h2>User Data</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Education</th>
              <th>Profession</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submitteddata.length > 0 ? (
              submitteddata.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.age}</td>
                    <td>{value.gender}</td>
                    <td>{value.education}</td>
                    <td>{value.profession}</td>
                    <td>{value.city}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(index)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(value, index)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h2 className="p-5">Empty List</h2>
            )}
          </tbody>
        </table>

        {/* MODAL START */}
        <Modal isOpen={isopen} style={customStyles}>
          <h2 style={{ textAlign: "center" }}>Update</h2>
          {arr.map((value, index) => {
            return (
              <div className="form-group">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.name}
                    onChange={(e) =>
                      setFormdata({ ...formdata, name: e.target.value })
                    }
                    placeholder="name"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.age}
                    onChange={(e) =>
                      setFormdata({ ...formdata, age: e.target.value })
                    }
                    placeholder="age"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.gender}
                    onChange={(e) =>
                      setFormdata({ ...formdata, gender: e.target.value })
                    }
                    placeholder="gender"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.education}
                    onChange={(e) =>
                      setFormdata({ ...formdata, edu: e.target.value })
                    }
                    placeholder="education"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.profession}
                    onChange={(e) =>
                      setFormdata({ ...formdata, prof: e.target.value })
                    }
                    placeholder="profession"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.city}
                    onChange={(e) =>
                      setFormdata({ ...formdata, city: e.target.value })
                    }
                    placeholder="city"
                  />
                  <br />
                  <button
                    className="btn btn-dark"
                    onClick={() => setIsopen(false)}
                  >
                    Close
                  </button>
                </form>
                <br />
                <button
                  className="btn btn-info"
                  OnCLick={() => handleUpdate(index, value)}
                >
                  Update
                </button>
              </div>
            );
          })}
        </Modal>
        {/* MODAL END */}
      </div>
    </>
  );
}
export default Table;