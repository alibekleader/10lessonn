import React from "react";
import { useSelector } from "react-redux";
import "./customModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((element) => element.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <img
          className=" modal-image"
          src="https://image.pngaaa.com/419/263419-middle.png"
          alt=""
        />
        <h2>{singleUser[0].name}</h2>
        <p>Email: <span className="input-search">{singleUser[0].email}</span></p>
        <p>Gender: <span className="input-search">{singleUser[0].gender}</span></p>
        <p>Age: <span className="input-search">{singleUser[0].age}</span></p>
        <button className="btn btn-danger input-search" onClick={() => setShowPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
