// @/utils/auth.js
import Cookies from "js-cookie";

/**
 * 获取存储在Pinia store中的用户认证令牌。
 * @returns {string} 返回存储的令牌或空字符串。
 */
export const getToken = () => {
  return Cookies.get("token");
};

/**
 * 设置用户认证令牌到Pinia store。
 * @param {string} token - 要存储的令牌值。
 */
export const setToken = (token) => {
  Cookies.set("token", token);
};

/**
 * 移除存储的用户认证令牌。
 */
export const removeToken = () => {
  Cookies.remove("token");
};
