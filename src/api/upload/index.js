import request from "@/utils/request";

export const uploadSimpleUrl = (data) => {
  return request({
    url: "/upload/simpleUrl",
    method: "post",
    data,
  });
};
