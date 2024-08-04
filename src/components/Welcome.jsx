import React from "react";

const Welcome = () => {
  return (
    <div className="px-5 mt-5 pb-5 text-start container">
      <h1 className="text-center">Welcome to My CRUD Application!</h1>
      <h1
        className="text-center"
        style={{ letterSpacing: "4px"}}
      >
        React CRUD app using Redux Toolkit
      </h1>
    </div>
  );
};

export default Welcome;
