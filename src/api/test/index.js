import request from "@/utils/request";

export const HelloWorld = () => {
  return request({
    url: "/test",
    method: "get",
  });
};

export const getItem = (id) => {
  return request({
    url: `/test/${id}`,
    method: "get",
  });
};
export const getItemList = () => {
  return request({
    url: "/test",
    method: "get",
  });
};

export const createItem = (data) => {
  return request({
    url: "/test",
    method: "post",
    data,
  });
};

export const updateItem = (id, data) => {
  return request({
    url: `/test/${id}`,
    method: "put",
    data,
  });
};

export const deleteItem = (id) => {
  return request({
    url: `/test/${id}`,
    method: "delete",
  });
};
