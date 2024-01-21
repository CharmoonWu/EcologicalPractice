import React from 'react';
import tw from 'twin.macro';
import { useForm, Form, FormProvider } from 'react-hook-form';
import { Button, Stack } from '@mui/material';
import XLSX from 'xlsx';
import PersonalInfo from './PersonalInfo';
import PersonalAttendance from './PersonalAttendance';

const Wrap = tw.div`w-full h-full p-16`;
// const FormNative = tw.form`grid grid-cols-4 gap-4`;
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

  const { ...rest } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <Stack direction="column" spacing={3} className="p-12">
      <FormProvider {...rest}>
        <Form
          control={rest.control}
          onSubmit={rest.handleSubmit(onSubmit)}
          id="personalForm"
          className="space-y-6"
          autoComplete="off"
        >
          <PersonalInfo />
          <PersonalAttendance />
        </Form>
      </FormProvider>

      <ButtonBox>
        <Button
          type="submit"
          variant="contained"
          className="w-[250px]"
          form="personalForm"
        >
          提交
        </Button>
        <Button
          variant="contained"
          className="w-[250px]"
          onClick={appWriteFile}
        >
          导出
        </Button>
      </ButtonBox>
    </Stack>
  );
}
