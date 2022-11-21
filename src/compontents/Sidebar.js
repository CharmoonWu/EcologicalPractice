import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuList, MenuItem, ListItemText } from "@mui/material";

const path = [
  {
    path: "/user",
    name: "user",
  },
  {
    path: "/set",
    name: "set",
  },
  {
    path: "/today",
    name: "Today",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <MenuList className="w-[300px] h-full">
      {path.map((item, i) => (
        <MenuItem key={i} onClick={() => navigate(item.path)}>
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
