import { useState } from "react";
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
  const [selected, setSelected] = useState("");

  const goNavigate = (item, i) => {
    setSelected(i);
    navigate(item.path);
  };

  return (
    <MenuList className="w-[300px] h-screen overflow-y-auto">
      {path.map((item, i) => (
        <MenuItem
          key={i}
          onClick={() => goNavigate(item, i)}
          selected={selected === i}
        >
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
}
