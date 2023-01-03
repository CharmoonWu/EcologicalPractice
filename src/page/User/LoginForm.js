import { useRef } from 'react';
import tw from 'twin.macro';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AccountCircle, Password } from '@mui/icons-material';

import Alert from 'compontents/Alert';
import { usePurviewSet } from 'zustandStore';

const Wrap = tw.div`w-full h-full flex items-center justify-center`;
const Form = tw.form`flex flex-col space-y-6`;

const PASSWORD = '1234';

export default function LoginForm() {
  const alertRef = useRef(null);
  const setEntrance = usePurviewSet((state) => state.setEntrance);

  const { handleSubmit, register } = useForm();

  const onSubmit = ({ password }) => {
    if (password !== PASSWORD) {
      setEntrance(false);
      alertRef.current.handleSwitch(true, 'error');
    } else {
      setEntrance(true);
      alertRef.current.handleSwitch(true, 'success');
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('userName')}
          defaultValue="charmoon"
          className="w-[400px]"
          variant="standard"
          label="userName"
          InputProps={{ startAdornment: <AccountCircle /> }}
        />

        <TextField
          {...register('password')}
          className="w-[400px]"
          variant="standard"
          label="password"
          type="password"
          InputProps={{ startAdornment: <Password /> }}
        />
        <Button type="submit">提交</Button>
      </Form>

      <Alert ref={alertRef} />
    </Wrap>
  );
}
