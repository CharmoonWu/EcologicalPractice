import { Suspense } from "react";
import tw from "twin.macro";
import { useQuery } from "react-query";

import { historyToday } from "network/api";

const Wrap = tw.div`w-full`;

const Content = () => {
  const { isLoading, data } = useQuery(
    "todayStory",
    () => historyToday({ type: 1 }),
    {
      onSuccess: (data) => console.log(data),
      suspense: true,
    }
  );

  return (
    <Wrap>
      {data.map((item, i) => (
        <span key={i}>{item.details}</span>
      ))}
    </Wrap>
  );
};

export default function Main() {
  return (
    <Suspense fallback={<>isloading</>}>
      <Content />
    </Suspense>
  );
}
