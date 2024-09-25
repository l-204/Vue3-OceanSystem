import axios from "axios";
import { getToken, removeToken } from "@/utils/auth";
import { message } from "ant-design-vue";

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 请求服务器地址
  timeout: 5000, // 请求超时上限
  withCredentials: true, // 允许携带Cookie
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 添加 Content-Type 标头
    config.headers["Content-Type"] = "application/json;charset=utf-8;";
    config.headers["X-Token"] = getToken();

    // 如果是文件上传请求，则覆盖 Content-Type
    if (config.method === "post" && config.url.includes("/upload/simpleUrl")) {
      config.headers["Content-Type"] = "multipart/form-data";
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      handleErrorResponse(res);
      return res;
      // return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    handleNetworkError(error);
    // return Promise.reject(error);
  }
);

// 错误处理函数
const handleErrorResponse = (response) => {
  switch (response.code) {
    case 401:
      message.error(response.message || "登录已过期，请重新登录。");
      removeToken(); // 删除 token
      break;
    case 403:
      message.error(response.message || "您没有权限访问此资源。");
      break;
    case 404:
      message.error(response.message || "请求的资源未找到。");
      break;
    case 500:
      message.error(response.message || "服务器内部错误，请稍后重试。");
      break;
    default:
      console.log(response.message || "接口信息报错");
      // message.error(response.message || "接口信息报错");
      break;
  }
};

const handleNetworkError = (error) => {
  if (!error.response) {
    // 网络错误
    message.error("网络连接出现问题，请检查您的网络。" + error);
  } else {
    // 其他错误
    message.error("接口信息报错" + error);
  }
};

export default service;
