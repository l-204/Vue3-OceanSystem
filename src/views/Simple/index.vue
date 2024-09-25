<template>
    <Layout>
        <div>
            <a-row style="padding:20px;background-color: #fff;margin-bottom:20px;align-items: center;">
                <a-col :span="15">
                    <a-button type="primary" @click="handleSimpleRegister">样本登记</a-button>
                </a-col>
                <!-- <a-col :span="3">
                    <a-button type="primary" @click="handleSimpleSave">样本存储</a-button>
                </a-col>
                <a-col :span="3">
                    <a-button type="primary" @click="handleSimpleRemove">样本取出</a-button>
                </a-col>
                <a-col :span="3">
                    <a-button type="primary" @click="handleSimpleLend">样本借出</a-button>
                </a-col>
                <a-col :span="3">
                    <a-button type="primary" @click="handleSimpleReturn">样本归还</a-button>
                </a-col> -->
                <a-col :span="9">
                    <a-input-search v-model:value="keyWord" placeholder="输入物种名称进行查询" size="large" :loading="loading"
                        enter-button @search="handleQuery" />
                </a-col>
            </a-row>
            <a-table :dataSource="tableList" :columns="columns" :customRow="handleRowClick">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'operations'">
                        <!-- <simple-form :formData="record" :formState="mode"></simple-form> -->
                        <!-- <a-button style="margin-right: 10px;" type="primary"
                            @click.stop="handleSimpleDispose(record)">编辑</a-button> -->
                        <a-dropdown>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item key="1" @click.stop="handleSimpleDispose(record)">样本处理</a-menu-item>
                                    <a-menu-item key="2" @click.stop="handleSimpleDestroy(record)">样本销毁</a-menu-item>
                                    <a-menu-item key="3" @click.stop="handleSimpleSave(record)">样本存储</a-menu-item>
                                    <a-menu-item key="4" @click.stop="handleSimpleRemove(record)">样本取出</a-menu-item>
                                    <a-menu-item key="5" @click.stop="handleSimpleLend(record)">样本借出</a-menu-item>
                                    <a-menu-item key="6" @click.stop="handleSimpleReturn(record)">样本归还</a-menu-item>
                                    <a-menu-item key="7" @click.stop="handleSimpleQuality(record)">样本质量评估</a-menu-item>
                                </a-menu>
                            </template>
                            <a-button style="margin-right: 10px;" type="primary" @click.stop>
                                编辑
                                <DownOutlined />
                            </a-button>
                        </a-dropdown>
                        <a-button type="primary" danger @click.stop="handleSimpleDelete(record)">删除</a-button>
                    </template>
                    <template v-else-if="column.key === 'picUrl'">
                        <a-image :src="record.picUrl" @click.stop :width="60" :height="60" />
                    </template>
                    <template v-else-if="column.key === 'state'">
                        {{ stateMap[record.state] }}
                    </template>
                </template>
            </a-table>
            <a-modal v-model:open="modalVisible" title="编辑记录" @ok="handleSubmit" @cancel="handleCancel">
                <a-form>
                    <div v-for="item in formConfig[currentFormType]">
                        <a-form-item v-if="!item.hidden" :label="item.label">
                            <component :is="item.component" v-model:value="currentRecord[item.value]"
                                :placeholder="item.placeholder" :disabled="item.disabled" />
                        </a-form-item>
                    </div>
                </a-form>
            </a-modal>

            <a-drawer v-model:open="drawerVisible" title="样本详情" placement="right">
                <div v-for="item in formConfig[currentFormType]">
                    <p>
                        <a-form-item v-if="!item.hidden && currentRecord[item.value]" :label="item.label">
                            <!-- 1：存储，2：取出，3：借出，4：归还，5：销毁/tinyint(4) -->
                            {{ currentRecord[item.value] }}
                        </a-form-item>
                    </p>
                </div>
            </a-drawer>
        </div>
    </Layout>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { showApi, simpleApi } from '@/api';
import Layout from '@/layout/index.vue';
import { columns } from './columns'; // 引入表格列配置
import { formConfig } from './formConfig'; // 引入表单配置
import { useAvatarStore } from '@/stores';
import { DownOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';

const avatartrStore = useAvatarStore();

const tableList = ref([]);
const modalVisible = ref(false);
const drawerVisible = ref(false);
const currentRecord = ref({});
const keyWord = ref('') // 搜索关键字
const loading = ref(false) // 搜索框状态
const currentFormType = ref('') // 表单类型

// 状态映射表
const stateMap = {
    1: '存储',
    2: '取出',
    3: '借出',
    4: '归还',
    5: '销毁',
};

const getSimplePage = async () => {
    const body = {
        page: "1",
        pageSize: "100",
        species: "",
        name: "",
    }
    const res = await showApi.simplePage(body);
    console.log(res.data.list);
    tableList.value = res.data.list;
    // const body2 = { rid: "1280842760408006656" }
    // const res2 = await showApi.simpleDetail(body2);
    // console.log(res2.data);
};

onMounted(() => {
    getSimplePage();
});

// 处理行点击事件
const handleRowClick = (record) => {
    return {
        onClick: async (event) => {
            currentFormType.value = 'detail';
            const res = await showApi.simpleDetail({ rid: record.rid });
            // console.log(res.data)
            drawerVisible.value = true;
            currentRecord.value = res.data;
        },
        onMouseenter: (event) => {
            // console.log('鼠标移入行', record);
            event.target.style.cursor = 'pointer';
        },  // 鼠标移入行
    }
}

const handleSimpleDelete = async (record) => {
    currentFormType.value = 'delete';
    currentRecord.value = record;
    modalVisible.value = true;
}

const handleSimpleRegister = async () => {
    currentFormType.value = 'register';
    modalVisible.value = true;
}

const handleSimpleSave = async (record) => {
    currentFormType.value = 'save';
    currentRecord.value = record;
    modalVisible.value = true;
}
const handleSimpleRemove = async (record) => {
    currentFormType.value = 'remove';
    currentRecord.value = record;
    modalVisible.value = true;
}
const handleSimpleLend = async (record) => {
    currentFormType.value = 'lend';
    currentRecord.value = record;
    modalVisible.value = true;
}
const handleSimpleReturn = async (record) => {
    currentFormType.value = 'return';
    currentRecord.value = record;
    modalVisible.value = true;
}

// 编辑按钮点击事件
const handleSimpleDispose = (record) => {
    currentFormType.value = 'dispose';
    currentRecord.value = record;
    modalVisible.value = true;
};
// 销毁按钮点击事件
const handleSimpleDestroy = async (record) => {
    currentFormType.value = 'destroy';
    currentRecord.value = record;
    modalVisible.value = true;
};

// 质量评估点击事件
const handleSimpleQuality = async (record) => {
    currentFormType.value = 'quality';
    currentRecord.value = record;
    modalVisible.value = true;
};

// 提交表单
const handleSubmit = async () => {
    modalVisible.value = false;
    let res;
    let init;
    let body;
    switch (currentFormType.value) {
        case 'register':
            res = await simpleApi.simpleRegister({ ...currentRecord.value, picUrl: avatartrStore.getAvatar });
            message.success(res.data)
            break;
        case 'dispose':
            res = await simpleApi.simpleDispose(body);
            message.success(res.data)
            break;
        case 'delete':
            res = await simpleApi.simpleDelete(currentRecord.value.rid);
            message.success('样本删除成功')
            break;
        case 'destroy':
            res = await simpleApi.simpleDestroyedSimple(currentRecord.value);
            message.success(res.data)
            break;
        case 'save':
            res = await simpleApi.simpleSave(currentRecord.value);
            message.success(res.data)
            break;
        case 'remove':
            res = await simpleApi.simpleRemove(currentRecord.value);
            message.success(res.data)
            break;
        case 'lend':
            res = await simpleApi.simpleLend(currentRecord.value);
            message.success(res.data)
            break;
        case 'return':
            res = await simpleApi.simpleReturnSimple(currentRecord.value);
            message.success(res.data)
        case 'quality':
            init = { rid: "", assessWay: "", assessResult: "", assessRemark: "", }

            // 提取 currentRecord.value 中与 body 相同的部分
            const filteredCurrentRecord = Object.fromEntries(
                Object.entries(currentRecord.value).filter(([key]) => init.hasOwnProperty(key))
            );

            // 合并到 body 中
            body = { ...init, ...filteredCurrentRecord };

            res = await simpleApi.simpleQuality(body);
            message.success(res.data)
            break
    }
    getSimplePage(); // 刷新表格数据
};

// 取消编辑
const handleCancel = () => {
    modalVisible.value = false;
    currentRecord.value = {};
};

// 查询事件
const handleQuery = async () => {
    loading.value = true;
    const body = {
        page: "1",
        pageSize: "100",
        species: "",
        name: keyWord.value,
    }
    const res = await showApi.simplePage(body)
    tableList.value = res.data.list;
    loading.value = false;
}
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>