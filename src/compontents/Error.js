import React from "react";
import tw from "twin.macro";
import { useRouteError } from "react-router-dom";

const Wrap = tw.div`w-full`;

export default function Error() {
  const error = useRouteError();

  return <Wrap>{error.message}</Wrap>;
}
