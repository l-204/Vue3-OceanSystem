<template>
  <Layout>
    <a-table :columns="columns" :data-source="apiList" :row-key="record => record.path">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <TagOutlined /><span> 接口名称</span>
        </template>
        <template v-else-if="column.key === 'path'">
          <ApiOutlined /><span> 接口路径</span>
        </template>
        <template v-else-if="column.key === 'method'">
          <RetweetOutlined /><span> 接口类型</span>
        </template>
        <template v-else-if="column.key === 'action'">
          <ToolOutlined /><span> 接口操作</span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>{{ record.name }}</a>
        </template>
        <template v-else-if="column.key === 'method'">
          <span>
            <a-tag :color="record.method === 'get' ? 'green' : 'orange'">{{ record.method }}</a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button type="primary" @click="openModal(record)">调用 API</a-button>
        </template>
      </template>
    </a-table>
    <!-- 表单 -->
    <a-modal :title="formData?.name" :open="open" @ok="handleSubmit" @cancel="handleCancel" cancelText="取消" okText="提交">
      <a-form :model="formData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
        <template v-for="(field, index) in formData?.form.fields || []" :key="index">
          <a-form-item :label="field.label">
            <a-input v-model:value="field.initialValue" :placeholder="field.placeholder" />
          </a-form-item>
        </template>
      </a-form>
    </a-modal>
  </Layout>
</template>

<script setup>
import Layout from '@/layout/index.vue';
import * as allAPI from '@/api';
import { userApi } from '@/api';
import { getToken, setToken } from '@/utils/auth';

import { apiList } from './apiList';
import {
  TagOutlined, ApiOutlined, RetweetOutlined, ToolOutlined
} from '@ant-design/icons-vue';
import { Form, Modal, Input, Select, Button } from 'ant-design-vue';

import { ref, onMounted } from 'vue';

const columns = [
  { title: '名称', dataIndex: 'name', key: 'name', align: 'center' },
  {
    title: '接口',
    dataIndex: 'path',
    key: 'path',
    align: 'center',
    filters: [
      { text: 'show', value: '/show', },
      { text: 'user', value: '/user', },
      { text: 'simple', value: '/simple', },
      { text: 'statistics', value: '/statistics', },
      { text: 'upload', value: '/upload', },
    ],
    filterMultiple: false,
    onFilter: (value, record) => {
      const parts = record.path.split('/'); // 将路径按'/'分割成数组
      if (parts.length > 1) { // 确保路径至少包含两个部分
        return parts[1] === value.slice(1); // 比较第二个部分与value的'/'+后面的字符串
      }
      return false; // 如果路径不符合条件，则返回false
    },
  },
  {
    title: '请求类型',
    dataIndex: 'method',
    key: 'method',
    align: 'center',
    filters: [
      { text: 'post', value: 'post', },
      { text: 'get', value: 'get', },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.method.indexOf(value) === 0,
  },
  { title: '操作', key: 'action', align: 'center', },
];

const apiResponse = async (api, func, value) => {
  const res = await allAPI[api][func](value);
};

// 定义状态
const open = ref(false);
const formData = ref({});

// 打开模态框
const openModal = (record) => {
  open.value = true;
  formData.value = record;
};

// 关闭模态框
const handleCancel = () => {
  open.value = false;
};

// 提交表单
const handleSubmit = async () => {
  const api = formData.value.api;
  const func = formData.value.func;

  // 将 formData.value.form.fields 转换为键值对对象
  const params = formData.value.form.fields.reduce((acc, field) => {
    acc[field.name] = field.initialValue;
    return acc;
  }, {});

  const res = await allAPI[api][func](params)
  console.log('API Response:', res);
  handleCancel(); // 关闭模态框
};



</script>

<style scoped>
a-button {
  margin-right: 8px;
}
</style>