<script setup>
import { ref, onMounted } from "vue";
import { showApi } from "@/api";
import { Button } from "ant-design-vue";
import Layout from "@/layout/index.vue"
const userList = ref([])

import { columns } from './columns'

const getUserList = async () => {
    const res = await showApi.simplePage()
    userList.value = res.data.list
}

onMounted(() => { getUserList() })

</script>

<template>
    <Layout>
        <div>
            <a-table :dataSource="userList" :columns="columns" />
        </div>
    </Layout>
</template>

<style scoped></style>