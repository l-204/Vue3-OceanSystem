import request from "@/utils/request";

export const statisticsPage = (data) => {
  return request({
    url: `/statistics/page`,
    method: "post",
    data,
  });
};
export const statisticsUpdate = (data) => {
  return request({
    url: `/statistics/update`,
    method: "post",
    data,
  });
};
