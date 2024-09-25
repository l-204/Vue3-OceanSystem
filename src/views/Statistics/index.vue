<template>
    <Layout>
        <div>
            <a-table :dataSource="tableList" :columns="columns" @row-click="handleRowClick">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'operations'">
                        <a-button type="primary" @click="handleEdit(record)">编辑</a-button>
                    </template>
                </template>
            </a-table>
            <a-modal v-model:open="modalVisible" title="编辑记录" @ok="handleSubmit" @cancel="handleCancel">
                <a-form>
                    <!-- <a-form-item label="ID">
                        <a-input v-model:value="currentRecord.id" disabled />
                    </a-form-item> -->
                    <a-form-item label="鉴定者ID">
                        <a-input v-model:value="currentRecord.uid" />
                    </a-form-item>
                    <a-form-item label="统计ID">
                        <a-input v-model:value="currentRecord.sid" />
                    </a-form-item>
                    <a-form-item label="样本数量">
                        <a-input v-model:value="currentRecord.num" disabled />
                    </a-form-item>
                    <a-form-item label="生物种类">
                        <a-input v-model:value="currentRecord.species" disabled />
                    </a-form-item>
                    <a-form-item label="物种名称">
                        <a-input v-model:value="currentRecord.name" disabled />
                    </a-form-item>
                    <a-form-item label="鉴定者">
                        <a-input v-model:value="currentRecord.appraiser" disabled />
                    </a-form-item>
                    <a-form-item label="保存方式">
                        <a-input v-model:value="currentRecord.saveWay" />
                    </a-form-item>
                    <a-form-item label="保存地点">
                        <a-input v-model:value="currentRecord.savePlace" />
                    </a-form-item>
                    <a-form-item label="统计备注">
                        <a-textarea v-model:value="currentRecord.statisticsRemark" />
                    </a-form-item>
                    <a-form-item label="创建时间">
                        <a-input v-model:value="currentRecord.createTime" disabled />
                    </a-form-item>
                    <a-form-item label="统计时间">
                        <a-input v-model:value="currentRecord.updateTime" disabled />
                    </a-form-item>
                </a-form>
            </a-modal>
        </div>
    </Layout>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { statisticsApi } from '@/api';
import Layout from '@/layout/index.vue';
import { columns } from './columns'; // 引入表格列配置

const tableList = ref([]);
const modalVisible = ref(false);
const currentRecord = ref({});

const getStatisticsPage = async () => {
    const body = {
        page: "1",
        pageSize: "100",
    };
    const res = await statisticsApi.statisticsPage(body);
    console.log(res.data.list);
    tableList.value = res.data.list;
};

onMounted(() => {
    getStatisticsPage();
});

// 处理行点击事件
const handleRowClick = (record) => {
    console.log('Row clicked:', record);
};

// 编辑按钮点击事件
const handleEdit = (record) => {
    currentRecord.value = record;
    modalVisible.value = true;
};

// 提交表单
const handleSubmit = async () => {
    await statisticsApi.statisticsUpdate({ ...currentRecord.value });
    modalVisible.value = false;
    getStatisticsPage(); // 刷新表格数据
};

// 取消编辑
const handleCancel = () => {
    modalVisible.value = false;
    currentRecord.value = {};
};
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>