import { instance } from "network/http";

export const historyToday = (params) => {
  const app_id = "rgihdrm0kslojqvm";
  const app_secret = "WnhrK251TWlUUThqaVFWbG5OeGQwdz09";

  return instance.get("/history/today", {
    params: {
      app_id,
      app_secret,
      ...params,
    },
  });
};
