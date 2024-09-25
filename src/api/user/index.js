import request from "@/utils/request";

export const userLogin = (
  data = {
    name: "zhangsan",
    password: "123456789",
  }
) => {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
};

export const userRegister = (
  data = {
    name: "test",
    password: "1234",
    gender: "男",
    picUrl: "",
  }
) => {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
};

export const userList = () => {
  return request({
    url: "/user/list",
    method: "get",
  });
};

export const userInfo = () => {
  return request({
    url: "/user/info",
    method: "get",
  });
};
