import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Geocode, District, Id } from 'network/server/amapServer';
import { TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import tw from 'twin.macro';

import PlaceCom from './PlaceCom';

const Wrap = tw.div`w-full h-full`;
const Form = tw.form`flex space-x-3 p-3`;

export default function Main() {
  const { handleSubmit, register, control } = useForm({});

  const { data, isLoading } = useQuery({
    queryKey: ['Geocode'],
    queryFn: () =>
      Geocode({
        params: {
          address: '广东省中山市小榄镇北区庆年四街1号',
        },
      }),
  });

  const { districtData, districtIsLoading } = useQuery({
    queryKey: ['District'],
    queryFn: () =>
      District({
        params: {
          keywords: '440000', //
          subdistrict: 2,
        },
      }),
  });

  useQuery({
    queryKey: ['id'],
    queryFn: () =>
      Id({
        params: {
          id: '192.168.1.22', //
        },
      }),
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <TextField
          {...register('keywords')}
          defaultValue="熊猫"
          className="w-[200px]"
          variant="standard"
          label="关键字"
        />

        <TextField
          {...register('types')}
          className="w-[200px]"
          variant="standard"
          label="类型"
        />

        <TextField
          {...register('city')}
          className="w-[200px]"
          variant="standard"
          label="城市"
        />

        <Button type="submit" variant="contained" className="w-[50px]">
          确认
        </Button>
      </Form>
      <PlaceCom />
    </Wrap>
  );
}
