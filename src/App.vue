<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
dayjs.locale('zh-cn');

const locale = zhCN
</script>

<template>
  <a-config-provider :locale="locale">
    <div>
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.ant-modal div[aria-hidden="true"] {
  display: none !important
}
</style>