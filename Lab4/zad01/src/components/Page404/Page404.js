import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const Page404 = () => {
  const history = useHistory();
  const location = useLocation();
  const style404 = { color: "red", fontSize: "100px" };

  return (
    <div>
      <div style={style404}>404</div>
      <h3>No match for {location.pathname}</h3>
      <button onClick={history.goBack}>Back</button>
    </div>
  );
};

export default Page404;
