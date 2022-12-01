import { styled, alpha } from "@mui/material/styles";
import { Search as SearchIcon } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { Toolbar, InputBase, AppBar } from "@mui/material";
import tw from "twin.macro";

import Sidebar from "compontents/Sidebar";

const Wrap = tw.div`flex w-screen h-screen overflow-hidden`;
const AppBarWrap = styled(AppBar)`
  width: calc(100vw - 300px) !important;
`;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Main() {
  const handleChange = () => {};
  return (
    <Wrap>
      <Sidebar />
      <div className="flex flex-col flex-1 pt-[64px]">
        <AppBarWrap>
          <Toolbar className="flex justify-end">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleChange}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </AppBarWrap>
        <div className="overflow-hidden">
          <Outlet />
        </div>
      </div>
    </Wrap>
  );
}
