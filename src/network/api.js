import { instance, APPID, APPSECRET } from 'network/http';

export const historyToday = (params) => {
  const app_id = 'rgihdrm0kslojqvm';
  const app_secret = 'WnhrK251TWlUUThqaVFWbG5OeGQwdz09';

  return instance.get('/history/today', {
    params: {
      app_id,
      app_secret,
      ...params,
    },
  });
};

/**
 * @param {string} params.content
 * @param {number} params.size
 * @param {number} params.type
 */
export const qrcode = (params) => {
  return instance.get('/qrcode/create/single/base64', {
    params: {
      app_id: APPID,
      app_secret: APPSECRET,
      ...params,
    },
  });
};
