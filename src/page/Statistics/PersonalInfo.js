import { useEffect } from 'react';
import { useForm, Form, useFormContext } from 'react-hook-form';
import { Button, TextField, Paper } from '@mui/material';

export default function PersonalInfo() {
  const { register, setFocus } = useFormContext();

  return (
    <Paper elevation={3} className="p-6">
      <TextField
        autoFocus
        label="姓名"
        variant="standard"
        {...register('name')}
      />
    </Paper>
  );
}
