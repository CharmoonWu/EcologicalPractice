import React, { useState } from 'react';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { map } from 'ramda';

export default function UploadImg() {
  const [fileInfos, setFileInfos] = useState([]);
  const onChange = (file) => {
    console.log(file);
  };

  const handleChange = (e) => {
    const fileList = e.target.files; ////File类型
    console.log(fileList);

    setFileInfos(
      map(
        (v) => ({
          name: v.name,
          size: v.size,
          type: v.type,
        }),
        fileList,
      ),
    );
  };

  return (
    <>
      <Upload onChange={onChange} action="">
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>

      <input type="file" id="fileInput" onChange={handleChange} multiple />

      <div>
        <h2>已选择的文件:</h2>
        <ul className="space-y-3 divide-y divide-slate-200">
          {fileInfos.map((fileInfo, index) => (
            <li key={index} className="pt-3">
              <p>文件名: {fileInfo.name}</p>
              <p>文件大小: {fileInfo.size} 字节</p>
              <p>文件类型: {fileInfo.type}</p>
            </li>
          ))}
        </ul>
        {/* 这里可以添加上传按钮，点击后触发上传逻辑 */}
      </div>
    </>
  );
}
