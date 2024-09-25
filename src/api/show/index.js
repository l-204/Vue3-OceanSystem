import request from "@/utils/request";

export const simplePage = (data) => {
  return request({
    url: "/show/simplePage",
    method: "post",
    data,
  });
};

export const simpleDetail = (params) => {
  return request({
    url: `/show/simpleDetail`,
    method: "get",
    params,
  });
};
