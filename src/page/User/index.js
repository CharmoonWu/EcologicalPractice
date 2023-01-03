import React from 'react';
import tw from 'twin.macro';

import { usePurviewSet } from 'zustandStore';
import LoginForm from './LoginForm';
import Detail from './detail';

const Wrap = tw.div`w-full h-full`;

export default function Main() {
  const isEntrance = usePurviewSet((state) => state.isEntrance);

  return <Wrap>{isEntrance ? <Detail /> : <LoginForm />}</Wrap>;
}
