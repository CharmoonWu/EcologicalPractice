import { CircularProgress } from "@mui/material";
import tw from "twin.macro";

const Wrap = tw.div`w-full h-full flex items-center justify-center`;

export default function Loading() {
  return (
    <Wrap>
      <CircularProgress />
    </Wrap>
  );
}
