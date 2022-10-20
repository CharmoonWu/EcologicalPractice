import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "compontents/Sidebar";

export default function Main() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar></Sidebar>
      <Outlet />
    </div>
  );
}
