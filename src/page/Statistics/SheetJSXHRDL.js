import React from 'react';
import XLSX from 'xlsx';

const SheetJSXHRDL = () => {
  const [__html, setHTML] = React.useState('');

  /* Fetch and update HTML */
  React.useEffect(() => {
    /* Fetch file */
    const req = new XMLHttpRequest();
    req.open('GET', 'https://sheetjs.com/pres.numbers', true);
    req.responseType = 'arraybuffer';
    req.onload = (e) => {
      /* Parse file */
      const wb = XLSX.read(new Uint8Array(req.response));
      const ws = wb.Sheets[wb.SheetNames[0]];

      /* Generate HTML */
      setHTML(XLSX.utils.sheet_to_html(ws));
    };
    req.send();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html }} />;
};
export { SheetJSXHRDL };
