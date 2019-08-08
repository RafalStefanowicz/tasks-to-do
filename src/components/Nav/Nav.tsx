import React from "react";

import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn";
import { NavLink } from "react-router-dom";
import { RouteTypes } from "../../types/RouteTypes";

export const Nav = (): JSX.Element => {
  return (
    <nav>
      <NavLink to={RouteTypes.today}>Today</NavLink>
      <NavLink to={RouteTypes.future}>Future</NavLink>
      <NavLink to={RouteTypes.past}>History</NavLink>
      <AddTaskBtn />
    </nav>
  );
};