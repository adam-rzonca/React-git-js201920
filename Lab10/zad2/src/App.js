import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./actions";

const UserInfo = ({ user }) => {
  const { name, email, picture } = user;

  const avatar = picture.large;
  const displayName = `${name.title} ${name.first} ${name.last}`;
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <div>Name: {displayName}</div>
      <div>Email: {email}</div>
    </div>
  );
};

const App = () => {
  const user = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (isError) {
    return <h4>Something went wrong while data loading...</h4>;
  }

  if (isLoading) {
    return <h4>Data loading....</h4>;
  }

  return (
    <div>
      <UserInfo user={user} />
      <p>
        <button onClick={() => dispatch(fetchData())}>Reload</button>
      </p>
    </div>
  );
};

export default App;
