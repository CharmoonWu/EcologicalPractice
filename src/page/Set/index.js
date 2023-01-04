import tw from 'twin.macro';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useUserDetail } from 'zustandStore';

const Wrap = tw.div`w-full h-full p-16`;
const Form = tw.form`grid grid-cols-2 gap-8`;

export default function Main() {
  const [detail, setDetail] = useUserDetail((state) => [
    state.detail,
    state.setDetail,
  ]);
  const { handleSubmit, register } = useForm({
    defaultValues: detail,
  });

  const onSubmit = (formData) => {
    setDetail(formData);
    toast.success('保存成功');
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('userName')}
          label="姓名"
          className="w-[250px]"
          size="small"
        />
        <TextField
          {...register('phone')}
          label="手机号码"
          className="w-[250px]"
          size="small"
        />
        <TextField
          {...register('email')}
          label="邮箱"
          className="w-[250px]"
          size="small"
        />
        <TextField
          {...register('home')}
          label="现居住地"
          className="w-[250px]"
          size="small"
          multiline
          rows={4}
        />
        <Button className="w-[250px] invisible" />
        <Button type="submit" variant="contained" className="w-[250px]">
          提交
        </Button>
      </Form>
    </Wrap>
  );
}
