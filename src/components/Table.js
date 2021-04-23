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
  const [submitLocalStorage, setSubmitLocalStorage] = useState([]);
  let [newFormData, setnewFormData] = useState({});
  const [array, setArray] = useState([]);
  let [indexID, setindexID] = useState(null);

  //modal
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    getLocalStorageData();
  }, [submitLocalStorage]);

  const getLocalStorageData = () => {
    let localDB = JSON.parse(localStorage.getItem("user"));
    setSubmitLocalStorage(localDB);
  };

  //DELETE USER
  const deleteUser = (id) => {
    setSubmitLocalStorage(submitLocalStorage.splice(id, 1));
    localStorage.setItem("user", JSON.stringify(submitLocalStorage));
  };

  //UPDATE USER
  const handleUpdate = (id) => {
    let data = JSON.parse(localStorage.getItem("user"));
    data.splice(indexID, 1, newFormData);
    localStorage.setItem("user", JSON.stringify(data));
    setIsopen(false);
    alert("Data successfully Updated");
  };

  //EDIT USER
  const handleEdit = (value, index) => {
    setnewFormData({ ...value });
    setIsopen(true);
    setindexID(index);
    array.splice(0, 1, value);
  };

  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <h2>User Table</h2>

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
            {submitLocalStorage.length > 0 ? (
              submitLocalStorage.map((value, index) => {
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
          {array.map((value, index) => {
            return (
              <div className="form-group">
                <form>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.name}
                    onChange={(e) =>
                      setnewFormData({ ...newFormData, name: e.target.value })
                    }
                    placeholder="name"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.age}
                    onChange={(e) =>
                      setnewFormData({ ...newFormData, age: e.target.value })
                    }
                    placeholder="age"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.gender}
                    onChange={(e) =>
                      setnewFormData({ ...newFormData, gender: e.target.value })
                    }
                    placeholder="gender"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.education}
                    onChange={(e) =>
                      setnewFormData({
                        ...newFormData,
                        education: e.target.value,
                      })
                    }
                    placeholder="education"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.profession}
                    onChange={(e) =>
                      setnewFormData({
                        ...newFormData,
                        profession: e.target.value,
                      })
                    }
                    placeholder="profession"
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={value.city}
                    onChange={(e) =>
                      setnewFormData({ ...newFormData, city: e.target.value })
                    }
                    placeholder="city"
                  />
                  <br />
                </form>
                <br />
                <button className="btn btn-info" onClick={() => handleUpdate()}>
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
