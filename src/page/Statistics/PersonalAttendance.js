import React from 'react';
import { TextField, Paper } from '@mui/material';
import { useFormContext } from 'react-hook-form';

export default function PersonalAttendance() {
  const { register, formState } = useFormContext();

  return (
    <Paper elevation={3} className="p-6">
      <TextField
        {...register('base', {
          required: '请输入基本工资',
          valueAsNumber: true,
        })}
        label="基本工资"
        variant="standard"
        type="number"
        error={formState?.errors?.base ? true : false}
        helperText={formState?.errors?.base?.message ?? ' '}
      />

      <TextField
        {...register('noWork', {
          required: '请输入缺勤',
          valueAsNumber: true,
        })}
        label="缺勤"
        variant="standard"
        type="number"
        error={formState?.errors?.noWork ? true : false}
        helperText={formState?.errors?.noWork?.message ?? ' '}
      />

      <TextField
        {...register('socialSecurity', {
          required: '请输入社保',
          valueAsNumber: true,
        })}
        label="社保"
        variant="standard"
        type="number"
        error={formState?.errors?.socialSecurity ? true : false}
        helperText={formState?.errors?.socialSecurity?.message ?? ' '}
      />
      <TextField
        {...register('incomeTax', {
          required: '请输入应缴个人所得税',
          valueAsNumber: true,
        })}
        label="应缴个人所得税"
        variant="standard"
        type="number"
        error={formState?.errors?.incomeTax ? true : false}
        helperText={formState?.errors?.incomeTax?.message ?? ' '}
      />
      <TextField
        {...register('total', {
          required: '请输入实发',
          valueAsNumber: true,
        })}
        label="实发"
        variant="standard"
        type="number"
        error={formState?.errors?.total ? true : false}
        helperText={formState?.errors?.total?.message ?? ' '}
      />
    </Paper>
  );
}
