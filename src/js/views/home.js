import React, { useState, useEffect, useContext, } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Vehicles } from "../component/vehicles";

export const Home = () => {

  return (
    <>
    <People />
    <Planets />
    <Vehicles />
    </>
  );
};