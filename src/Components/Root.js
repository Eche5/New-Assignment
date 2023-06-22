import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar/NavigationBar";
export default function Root() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
