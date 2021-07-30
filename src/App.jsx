import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Error from "./Error";
import AsyncComp from "./features/profile/Async/asyncComp";
import { ChangeComp } from "./features/profile/changeComp";

function App() {
  const error = useSelector((state) => state.error);
  const [errorState, setErrorState] = useState();

  useEffect(() => {
    setErrorState(error);
  }, [error]);

  return (
    <div>
      <ChangeComp />
      <AsyncComp />
      {errorState ? <Error error={errorState} /> : null}
    </div>
  );
}
export default App;
