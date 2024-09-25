import { defineStore } from "pinia";

export const useAvatarStore = defineStore("avatar", {
  state: () => ({
    avatar: "", // 初始值为空字符串
  }),
  getters: {
    getAvatar: (state) => state.avatar, // 添加 getter 方法
  },
  actions: {
    setAvatar(avatar) {
      this.avatar = avatar;
      // 可选：持久化存储
      //   localStorage.setItem("avatar", avatar);
    },
    resetAvatar() {
      this.avatar = "";
      // 可选：清除持久化存储
      //   localStorage.removeItem("avatar");
    },
  },
});
