import axios from 'axios';

const BASE_URL = 'https://restapi.amap.com/v3';
const KEY = '579b08e365cc42830c08c46dd67d1298';

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((v) => v);
instance.interceptors.response.use((v) => v.data);

/**
 * 地理/逆地理编码
 * @param {string} params.address
 */

export const Geocode = ({ params }) => {
  return instance.get('/geocode/geo', {
    params: {
      key: KEY,
      ...params,
    },
  });
};

/**
 * 行政区域查询
 * @param {string} params.keywords
 */
export const District = ({ params }) => {
  return instance.get('/config/district', {
    params: {
      key: KEY,
      ...params,
    },
  });
};

/**
 * IP定位
 * @param {string} params.id
 */
export const Id = ({ params }) => {
  return instance.get('/ip', {
    params: {
      key: KEY,
      ...params,
    },
  });
};
