<script setup>
import {
    ClockCircleOutlined, CheckCircleOutlined, PlayCircleOutlined,
    CodeOutlined, ConsoleSqlOutlined, KeyOutlined, BarsOutlined
} from '@ant-design/icons-vue';
import Layout from '@/layout/index.vue';
</script>

<template>
    <Layout>
        <a-layout-header style="background: #fff; padding: 0 32px;text-align: center;">
            <!-- 第九组：李浩锐（组长），李文昊，黄键汶，唐伟其 -->
        </a-layout-header>
        <div class="timeline-container">

            <div class="timeline-left">
                <h3 style="text-align: center;">开发日志</h3>
                <a-timeline mode="alternate">
                    <a-timeline-item color="green">
                        <template #dot>
                            <CheckCircleOutlined style="font-size: 16px" />
                        </template>
                        2024-09-19-样本管理测试，Echart可视化，项目总结
                    </a-timeline-item>
                    <a-timeline-item>
                        <template #dot>
                            <ClockCircleOutlined style="font-size: 16px" />
                        </template>
                        2024-09-18-样本管理接口测试，模块拆分，组件封装
                    </a-timeline-item>
                    <a-timeline-item>
                        <template #dot>
                            <ClockCircleOutlined style="font-size: 16px" />
                        </template>
                        2024-09-14-样本管理页面搭建，样本管理接口联调，路由面包屑
                    </a-timeline-item>
                    <a-timeline-item>
                        <template #dot>
                            <ClockCircleOutlined style="font-size: 16px" />
                        </template>
                        2024-09-13-数据统计模块，用户管理模块，功能测试模块，邮箱抽屉
                    </a-timeline-item>
                    <a-timeline-item>
                        <template #dot>
                            <ClockCircleOutlined style="font-size: 16px" />
                        </template>
                        2024-09-12-前端基本页面搭建，路由配置，异常处理模块，系统设置模块
                    </a-timeline-item>
                    <a-timeline-item color="orange">
                        <template #dot>
                            <PlayCircleOutlined style="font-size: 16px" />
                        </template>
                        2024-09-04-需求分析，后端项目搭建，接口编写，数据库设计
                    </a-timeline-item>
                </a-timeline>
            </div>
            <!-- <div class="timeline-right">
                <h3 style="text-align: center;">小组分工</h3>
                <a-timeline mode="alternate">
                    <a-timeline-item color="">
                        <template #dot>
                            <CodeOutlined style="font-size: 16px;" />
                        </template>
                        李浩锐：前端项目搭建，路由配置，路由面包屑，登录验证，异常处理，Echart可视化，功能测试，邮箱抽屉
                    </a-timeline-item>
                    <a-timeline-item color="orange">
                        <template #dot>
                            <ConsoleSqlOutlined style="font-size: 16px;" />
                        </template>
                        黄键汶：需求分析，后端项目搭建，接口编写，数据库设计，功能测试
                    </a-timeline-item>
                    <a-timeline-item color="green">
                        <template #dot>
                            <KeyOutlined style="font-size: 16px;" />
                        </template>
                        李文昊：注册页，登录页，报告撰写
                    </a-timeline-item>
                    <a-timeline-item color="purple">
                        <template #dot>
                            <BarsOutlined style="font-size: 16px;" />
                        </template>
                        唐伟其：个人中心页，系统设置页，报告撰写
                    </a-timeline-item>
                </a-timeline>
            </div> -->
        </div>
    </Layout>
</template>

<style scoped>
.timeline-container {
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 20px;
}

.timeline-left,
.timeline-right {
    width: 48%;
}

.timeline-left {
    margin-right: 4%;
}
</style>