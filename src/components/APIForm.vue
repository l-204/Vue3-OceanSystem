<template>
    <a-modal :title="apiItem.name" :open="open" @ok="handleSubmit" @cancel="handleCancel" cancelText="取消"
        okText="提交">
        <!-- <a-form :model="formData" :label-col="{ span: 6 }" :wrapper-col="{ span: 18 }">
            <template v-for="(field, index) in apiItem.form.fields" :key="index">
                <a-form-item :label="field.label">
                    <component :is="field.component" v-bind="field.props" v-model:value="formData[field.name]" />
                </a-form-item>
            </template>
        </a-form> -->
    </a-modal>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import * as allAPI from '@/api';

// 定义 props
const props = defineProps({
    apiItem: {
        type: Object,
        required: true
    }
});

// 定义状态
const open = ref(false);
const formData = ref({});

// 打开模态框
const openModal = () => {
    open.value = true;
    formData.value = {};
};

// 关闭模态框
const handleCancel = () => {
    open.value = false;
};

// 提交表单
const handleSubmit = () => {
    const api = props.apiItem.api;
    const func = props.apiItem.func;

    allAPI[api][func](formData.value)
        .then((res) => {
            console.log('API Response:', res);
            handleCancel(); // 关闭模态框
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// // 定义 form fields 的组件映射
// const fieldComponents = {
//     input: Input,
//     select: Select
// };

// // 定义 form fields 的 props 映射
// const fieldProps = {
//     input: ['placeholder'],
//     select: ['options']
// };

// const registerComponents = () => {
//     // 注册 form fields 的组件
//     for (const key in fieldComponents) {
//         Form.registerComponent(key, fieldComponents[key]);
//     }
// }

// onMounted(() => {
//     registerComponents(); // 注册组件
// }),

// // 监听父组件传入的 apiItem 变化
// watch(() => props.apiItem, (newVal) => {
//     if (newVal) {
//         openModal();
//     }
// });
</script>

<style scoped>
/* 样式可以根据需要调整 */
</style>