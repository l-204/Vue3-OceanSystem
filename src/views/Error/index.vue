<script setup>
import Layout from '@/layout/index.vue';
import { ref } from 'vue';
const mode = ref('top');
const activeKey = ref('1');
const callback = val => {
    console.log(val);
};
</script>

<template>
    <Layout>
        <a-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
            <a-radio-button value="top">水平</a-radio-button>
            <a-radio-button value="left">垂直</a-radio-button>
        </a-radio-group>
        <a-tabs v-model:activeKey="activeKey" :tab-position="mode" @tabScroll="callback">
            <a-tab-pane key="1" tab="403">
                <a-result status="403" title="403" sub-title="抱歉，您无权访问此页面.">
                    <template #extra>
                        <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
                    </template>
                </a-result>
            </a-tab-pane>
            <a-tab-pane key="2" tab="404">
                <a-result status="404" title="404" sub-title="抱歉，您访问的页面不存在.">
                    <template #extra>
                        <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
                    </template>
                </a-result>
            </a-tab-pane>
            <a-tab-pane key="3" tab="500">
                <a-result status="500" title="500" sub-title="抱歉，服务器出错.">
                    <template #extra>
                        <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
                    </template>
                </a-result>
            </a-tab-pane>
        </a-tabs>
    </Layout>
</template>