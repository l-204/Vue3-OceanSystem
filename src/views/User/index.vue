<script setup>
import Layout from '@/layout/index.vue'
import { ref, reactive, onMounted } from 'vue';

import { userApi } from '@/api';

const userInfo = reactive({})
const getUserInfo = async () => {
    const res = await userApi.userInfo()
    Object.assign(userInfo, { ...res.data })
    // console.log(userInfo)
}

onMounted(() => { getUserInfo() })
</script>

<template>
    <Layout>
        <br />
        <a-descriptions bordered title="个人信息" :column="2">
            <template #extra>
                <a-button type="primary">修改信息</a-button>
            </template>
            <a-descriptions-item label="id">{{ userInfo.id }}</a-descriptions-item>
            <a-descriptions-item label="uid">{{ userInfo.uid }}</a-descriptions-item>
            <a-descriptions-item label="姓名">{{ userInfo.name }}</a-descriptions-item>
            <a-descriptions-item label="性别">{{ userInfo.gender == 1 ? '男' : '女' }}</a-descriptions-item>
            <a-descriptions-item label="注册时间">{{ userInfo.createTime }}</a-descriptions-item>
            <a-descriptions-item label="更新时间">
                {{ userInfo.updateTime }}
            </a-descriptions-item>
            <a-descriptions-item label="头像">
                <a-avatar :src="userInfo.picUrl" :size="48"></a-avatar>
            </a-descriptions-item>
        </a-descriptions>
    </Layout>
</template>

<style scoped></style>