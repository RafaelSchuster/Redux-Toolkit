import React, { useEffect, useState } from "react";
import { profileAsync } from "./profileAsync";
import { useSelector, useDispatch } from "react-redux";

const AsyncComp = () => {
  const car = useSelector((state) => state.profile.car);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(profileAsync());
  }, []);
  return <div>{car}</div>;
};

export default AsyncComp;
