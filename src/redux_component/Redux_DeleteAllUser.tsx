import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/UserSlice";

export const Redux_DeleteAllUser = () => {
  const dispatch =  useDispatch()

  const deleteUsers=()=>{
    console.log("ho ho ho")
    dispatch(clearAllUsers());
  }
  return <div>
    <button className="btn add-btn" onClick={deleteUsers}>Clear All Users</button>
  </div>;
};