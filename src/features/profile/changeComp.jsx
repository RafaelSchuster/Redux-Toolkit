import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addYearToAge,
  decreaseYearFromAge,
  changeByAmount,
  changeName,
} from "./profileSlice";

export const ChangeComp = () => {
  const name = useSelector((state) => state.profile.name);
  const age = useSelector((state) => state.profile.age);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{name}</div>

      <div>{age}</div>
      <div>
        <button onClick={() => dispatch(addYearToAge())}>Add</button>
      </div>
      <div>
        <button onClick={() => dispatch(decreaseYearFromAge())}>
          Decrease
        </button>
      </div>
      <div>
        <br></br>
        <input
          placeholder="Change Age"
          type="text"
          onChange={(e) => dispatch(changeByAmount(Number(e.target.value)))}
        />
      </div>

      <div>
        <input
          placeholder="Change Name"
          type="text"
          onChange={(e) => dispatch(changeName(e.target.value))}
        />
      </div>
    </div>
  );
};
