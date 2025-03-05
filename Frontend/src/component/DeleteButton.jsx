import React from "react";

const DeleteButton = ({ onClick }) => {
  return <button className='bg-red-500 text-white' onClick={onClick}>Delete</button>;
};

export default DeleteButton;
