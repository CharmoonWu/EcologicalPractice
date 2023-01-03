import { Snackbar, Alert } from '@mui/material';
import { useState, forwardRef, useImperativeHandle } from 'react';

const ERROR = '认证失败';
const SUCCESS = '认证成功';

const AlertCom = ({}, ref) => {
  const [state, setState] = useState({
    isOpen: false,
    severity: 'success',
  });

  useImperativeHandle(ref, () => ({
    handleSwitch: (isOpen, severity) =>
      setState({ ...state, isOpen, severity }),
  }));

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={state.isOpen}
      autoHideDuration={6000}
      onClose={() => setState({ ...state, isOpen: false })}
    >
      <Alert severity={state.severity}>
        {state.severity === 'success' ? SUCCESS : ERROR}
      </Alert>
    </Snackbar>
  );
};

export default forwardRef(AlertCom);
