import React from 'react';
import tw from 'twin.macro';
import { Typography } from '@mui/material';

import { useUserDetail } from 'zustandStore';
import { keys, isEmpty } from 'ramda';

const Wrap = tw.div`w-full h-full`;
const Item = tw.div`w-[200px] flex items-center space-x-3`;

export default function Detail() {
  const userDetail = useUserDetail((state) => state.detail);

  if (isEmpty(userDetail)) {
    return <>暂无详情数据</>;
  }

  return (
    <Wrap>
      {keys(userDetail).map((item, i) => (
        <Item key={i}>
          <Typography variant="subtitle1" color="GrayText">
            {item}:
          </Typography>
          <Typography variant="string">{userDetail[item]}</Typography>
        </Item>
      ))}
    </Wrap>
  );
}
