import React from 'react';
import tw from 'twin.macro';
import { useRouteError } from 'react-router-dom';
import { Alert } from '@mui/material';

const Wrap = tw.div`w-full h-full flex items-center justify-center`;

export default function Error() {
  const error = useRouteError();

  return (
    <Wrap>
      <Alert variant="outlined" severity="error">
        {error.message}
      </Alert>
    </Wrap>
  );
}
