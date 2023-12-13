import { Suspense, useState, useMemo } from 'react';
import tw, { styled } from 'twin.macro';
import { useQuery } from '@tanstack/react-query';
import { Stack, Divider, Link, Paper } from '@mui/material';

import { historyToday } from 'network/api';
import Loading from 'compontents/Loading';

const Wrap = tw.div`w-full h-full flex p-3`;
const WrapPaper = styled(Paper)`
  ${tw`flex-1`};
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
`;

const Content = () => {
  const [current, setCurrent] = useState(0);
  const { data } = useQuery(['todayStory'], () => historyToday({ type: 1 }), {
    suspense: true,
  });

  const detail = useMemo(
    () => data?.[current].details || '暂无资料',
    [data, current],
  );

  return (
    <Wrap>
      <WrapPaper elevation={0} className="flex-1 overflow-y-auto">
        <Stack
          direction="column"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {data.map((item, i) => (
            <Link
              href="#"
              underline="hover"
              key={i}
              onClick={() => setCurrent(i)}
            >
              {item.title}
            </Link>
          ))}
        </Stack>
      </WrapPaper>
      <Paper elevation={0} className="flex-1 p-3 overflow-y-auto">
        <h1 className="text-3xl text-pink-300 font-bold mb-3">详情介绍</h1>
        {detail}
      </Paper>
    </Wrap>
  );
};

export default function Main() {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  );
}
