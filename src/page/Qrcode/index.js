import tw from 'twin.macro';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useUserDetail } from 'zustandStore';
import { useQuery, useMutation } from '@tanstack/react-query';
import { qrcode } from 'network/api';
import { useState } from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { saveAs } from 'file-saver';

const Wrap = tw.div`w-full h-full p-16`;
const Form = tw.form`grid grid-cols-2 gap-8`;
const CodeWall = tw.div`w-[300px] h-[300px]`;

export default function Main() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [url, setUrl] = useState(null);

  const qrcodeMutation = useMutation(qrcode, {
    onSuccess: (data) => {
      if (data.type === 0) {
        setUrl(data.qrCodeUrl);
      } else {
        console.log('有空再做');
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (formData) => {
    qrcodeMutation.mutate(formData);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('content')}
          label="Content"
          className="w-[250px]"
          size="small"
        />
        <TextField
          {...register('size', {
            required: true,
            valueAsNumber: true,
          })}
          label="Size"
          className="w-[250px]"
          size="small"
          type="number"
        />
        <TextField
          {...register('type', { required: true, valueAsNumber: true })}
          label="Type"
          className="w-[250px]"
          size="small"
          type="number"
        />
        <Button type="submit" variant="contained" className="w-[250px]">
          提交
        </Button>
      </Form>
      <CodeWall>
        <img src={url} alt="" />
      </CodeWall>
    </Wrap>
  );
}
