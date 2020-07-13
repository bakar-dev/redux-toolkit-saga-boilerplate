import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_USERS } from "../../Constants/sagaActions";

const User = () => {
  const dispatch = useDispatch();

  const usersLoading = useSelector((state) => state.user.usersLoading);

  const fetchUsers = () => {
    console.log("fetching..");
    dispatch({ type: FETCH_USERS });
  };

  console.log(usersLoading);

  return (
    <div>
      <button onClick={fetchUsers} disabled={usersLoading}>
        {usersLoading ? "Loading" : "Fetch"}
      </button>
    </div>
  );
};

export default User;
