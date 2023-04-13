import { useRef } from 'react';
import tw from 'twin.macro';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { AccountCircle, Password } from '@mui/icons-material';
import { shallow } from 'zustand/shallow';

import Alert from 'compontents/Alert';
import { usePurviewSet } from 'zustandStore';

const Wrap = tw.div`w-full h-full flex items-center justify-center`;
const Form = tw.form`flex flex-col space-y-6`;

const PASSWORD = '1234';

export default function LoginForm() {
  const alertRef = useRef(null);
  const [setEntrance, setSelect, isSelect] = usePurviewSet(
    (state) => [state.setEntrance, state.setSelect, state.isSelect],
    shallow,
  );

  const { handleSubmit, register, control } = useForm({
    defaultValues: {
      save: isSelect,
    },
  });

  const onSubmit = ({ password, save }) => {
    if (password !== PASSWORD) {
      setEntrance(false);
      alertRef.current.handleSwitch(true, 'error');
    } else {
      setEntrance(true);
      setSelect(save);
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

        <Controller
          control={control}
          name="save"
          render={({ field: { onChange, onBlur, value, name, ref } }) => (
            <FormControlLabel
              control={
                <Checkbox onChange={onChange} checked={value} inputRef={ref} />
              }
              label="记住状态"
            />
          )}
        />

        <Button type="submit" variant="contained">
          提交
        </Button>
      </Form>

      <Alert ref={alertRef} />
    </Wrap>
  );
}
