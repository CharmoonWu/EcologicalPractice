import React from 'react';
import tw from 'twin.macro';
import { useForm } from 'react-hook-form';
import { Button, TextField, Paper } from '@mui/material';
import XLSX from 'xlsx';

const Wrap = tw.div`w-full h-full p-16`;
const Form = tw.form`grid grid-cols-4 gap-4`;
const ButtonBox = tw.div`w-full flex justify-end mt-20 space-x-2`;

export default function Main() {
  const appWriteFile = () => {
    const file = './statisticsData.xlsx';
    let worksheet, workbook;

    workbook = XLSX.readFile(file);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // 将表单数据转换为行对象
    const formData = [
      { name: 'John', age: 25, email: 'john@example.com' },
      { name: 'Jane', age: 30, email: 'jane@example.com' },
      { name: 'Bob', age: 35, email: 'bob@example.com' },
    ];

    // 将行对象添加到工作表中
    XLSX.utils.sheet_add_json(worksheet, formData, {
      header: ['name', 'age', 'email'],
      skipHeader: true,
      origin: -1,
    });

    // 将工作簿写入文件
    XLSX.writeFile(workbook, file);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Wrap>
      <Paper className="p-6" elevation={3}>
        <Form onSubmit={handleSubmit(onSubmit)} id="statisticsForm">
          <TextField
            {...register('base', {
              required: '请输入基本工资',
            })}
            label="基本工资"
            variant="standard"
            type="number"
            focused
            error={errors?.base ?? false}
            helperText={errors?.base?.message ?? ' '}
          />

          <TextField
            {...register('noWork', {
              required: '请输入缺勤',
            })}
            label="缺勤"
            variant="standard"
            type="number"
            focused
            error={errors?.noWork ?? false}
            helperText={errors?.noWork?.message ?? ' '}
          />

          <TextField
            {...register('socialSecurity', {
              required: '请输入社保',
            })}
            label="社保"
            variant="standard"
            type="number"
            focused
            error={errors?.socialSecurity ?? false}
            helperText={errors?.socialSecurity?.message ?? ' '}
          />
          <TextField
            {...register('incomeTax', {
              required: '请输入应缴个人所得税',
            })}
            label="应缴个人所得税"
            variant="standard"
            type="number"
            focused
            error={errors?.incomeTax ?? false}
            helperText={errors?.incomeTax?.message ?? ' '}
          />
          <TextField
            {...register('total', {
              required: '请输入实发',
            })}
            label="实发"
            variant="standard"
            type="number"
            focused
            error={errors?.total ?? false}
            helperText={errors?.total?.message ?? ' '}
          />
        </Form>
        <ButtonBox>
          <Button
            type="submit"
            variant="contained"
            className="w-[250px]"
            form="statisticsForm"
          >
            提交
          </Button>
          <Button
            type="submit"
            variant="contained"
            className="w-[250px]"
            onClick={appWriteFile}
          >
            导出
          </Button>
        </ButtonBox>
      </Paper>
    </Wrap>
  );
}
