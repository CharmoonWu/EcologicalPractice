import axios from 'axios';

const BASE_URL = 'https://www.mxnzp.com';
const envDev = '/api';

const APPID = 'iqcrcsjrjrtvj0kn';
const APPSECRET = 'OsYvCSUvUZPgyCGQsj8m8jBkkRqHd181';
const Text = 'test+5';

const instance = axios.create({
  baseURL: BASE_URL + envDev,
});

instance.interceptors.request.use((v) => v);
instance.interceptors.response.use(
  (v) => {
    return v.data.data;
  },
  (e) => console.error(e),
);

export { instance, APPID, APPSECRET };
