import tw from 'twin.macro';
import { Button } from '@mui/material';
import shallow from 'zustand/shallow';

import { useBearStore } from 'zustandStore';
import { useEffect } from 'react';

const Wrap = tw.div`w-full`;

export default function Main() {
  const { bears, uuid } = useBearStore((state) => ({
    bears: state.bears,
    uuid: state.uuid,
  })); //直接指定对应的state

  const reduce = useBearStore((state) => state.reducePopulation);
  const addFun = useBearStore((state) => state.increasePopulation);

  useEffect(() => {
    console.log(bears);
    console.log(uuid);
  }, [bears, uuid]);

  return (
    <Wrap>
      <Button onClick={reduce}>-1</Button>
      <span>{bears}</span>
      <Button onClick={addFun}>+1</Button>
    </Wrap>
  );
}
