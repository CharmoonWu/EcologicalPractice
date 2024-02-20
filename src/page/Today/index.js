import { Suspense, useState, useMemo, lazy } from 'react';
import tw, { styled } from 'twin.macro';
import { useSuspenseQuery, useQuery } from '@tanstack/react-query';
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

export default () => {
  const [current, setCurrent] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ['todayStory'],
    queryFn: async () => await historyToday({ type: 1 }),
  });

  const detail = useMemo(
    () => data?.[current].details || '暂无资料',
    [data, current],
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrap>
      <Suspense fallback={<Loading />}>
        {Array.isArray(data) ? (
          <>
            <WrapPaper elevation={0} className="flex-1 overflow-y-auto">
              <Stack
                direction="column"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                {data?.map((item, i) => (
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
              <h1 className="text-3xl text-pink-300 font-bold mb-3">
                详情介绍
              </h1>
              {detail}
            </Paper>
          </>
        ) : (
          '暂无数据'
        )}
      </Suspense>
    </Wrap>
  );
};
