import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux"

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

  const sessionUser = useSelector(state => state.session.user)
  const loaded = useSelector(state => state.session.loaded)

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!sessionUser && loaded) {
    return <Redirect to="/"></Redirect>;
  }

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
