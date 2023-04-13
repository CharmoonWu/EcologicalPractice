import React from 'react';
import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

const Wrap = tw.div`w-full h-full p-16`;
const Form = tw.form`grid grid-cols-4 gap-4`;

export default function Main() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = (formData) => {
    console.log(formData);
  };

  console.log(errors);

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('home', {
            required: '请输入基本工资',
          })}
          label="基本工资"
          variant="standard"
          type="number"
          error={errors?.home ?? false}
          helperText={errors?.home?.message ?? ' '}
        />

        <Button type="submit" variant="contained" className="w-[250px]">
          提交
        </Button>
      </Form>
    </Wrap>
  );
}
