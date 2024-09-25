<script setup>
import { ref, reactive, h, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import {
    HomeOutlined, UserOutlined, MailOutlined, ExperimentOutlined,
    BellOutlined, SettingOutlined, PoweroffOutlined, SearchOutlined, DownOutlined,
    BarChartOutlined, AlertOutlined, BookOutlined, DesktopOutlined, HddOutlined, AuditOutlined, SwapOutlined
} from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import Logo from '@/assets/img/logo.png';
import { userApi } from '@/api';
import EmailList from '@/components/EmailList.vue';

const collapsed = ref(false);

const router = useRouter()
const route = useRoute()

const breadcrumb = computed(() => {
    return route.matched.reduce((acc, route) => {
        if (route.meta.breadcrumb) {
            acc.push(...route.meta.breadcrumb.map(item => ({ text: item, link: route.path })));
        }
        return acc;
    }, []);
})

const selectedKeys = ref([route.path])

const handleRouter = async (path) => {
    router.push(path)
}

const cancelLogout = () => {
    message.info('取消退出登录')
}

import { removeToken } from '@/utils/auth';
const confirmLogout = () => {
    removeToken()
    router.push('/login')
    message.success('退出登录成功')
}

const userInfo = reactive({})

const getUserInfo = async () => {
    const res = await userApi.userInfo()
    Object.assign(userInfo, { ...res.data })
    // console.log(userInfo)
}

onMounted(() => {
    getUserInfo()
})

</script>

<template>
    <a-layout style="min-height: 100vh">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <a-flex :vertical="false">
                <div :style="{ flexGrow: !collapsed ? 0 : 1, textAlign: 'center', }">
                    <img class="logo" :src="Logo" />
                </div>
                <div class="title" v-show="!collapsed">海洋科普网后台</div>
            </a-flex>

            <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                <a-menu-item key="/" @click="handleRouter('/')">
                    <home-outlined />
                    <span>首页</span>
                </a-menu-item>
                <a-menu-item key="/user" @click="handleRouter('/user')">
                    <UserOutlined />
                    <span>个人中心</span>
                </a-menu-item>
                <a-menu-item key="/simple" @click="handleRouter('/simple')">
                    <DesktopOutlined />
                    <span>样本管理</span>
                </a-menu-item>
                <!-- <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <DesktopOutlined />
                            <span>样本管理</span>
                        </span>
                    </template>
<a-menu-item key="3" @click="handleRouter('/simple')">
    <AuditOutlined />
    <span>登记和处理</span>
</a-menu-item>
<a-menu-item key="4" @click="handleRouter('/simple')">
    <HddOutlined />
    <span>存储和取出</span>
</a-menu-item>
<a-menu-item key="5" @click="handleRouter('/simple')">
    <SwapOutlined />
    <span>借出和归还</span>
</a-menu-item>
</a-sub-menu> -->
                <a-menu-item key="/statistics" @click="handleRouter('/statistics')">
                    <BarChartOutlined />
                    <span>数据统计</span>
                </a-menu-item>
                <a-menu-item key="/setting" @click="handleRouter('/setting')">
                    <SettingOutlined />
                    <span>系统设置</span>
                </a-menu-item>
                <a-menu-item key="/error" @click="handleRouter('/error')">
                    <AlertOutlined />
                    <span>异常处理</span>
                </a-menu-item>
                <a-menu-item key="/test" @click="handleRouter('/test')">
                    <ExperimentOutlined />
                    <span>功能测试</span>
                </a-menu-item>
                <a-menu-item key="/overview" @click="handleRouter('/overview')">
                    <BookOutlined />
                    <span>项目概述</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0 32px">
                <a-row :gutter="16">
                    <a-col class="gutter-row" :span="12">
                        <div class="gutter-box">
                            <a-breadcrumb style="margin: 16px 0;">
                                <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
                                    <a v-if="item.text === '首页'" href="/">{{ item.text }}</a>
                                    <span v-else>{{ item.text }}</span>
                                </a-breadcrumb-item>
                            </a-breadcrumb>
                        </div>
                    </a-col>
                    <a-col class="gutter-row" :span="12">
                        <div class="gutter-box">
                            <a-row>
                                <a-col :span="15">
                                    <a-avatar :size="48" :src="userInfo.picUrl">
                                        <template #icon>
                                            <UserOutlined />
                                        </template>
                                    </a-avatar>
                                    <span class="username">{{ userInfo.name }}</span>
                                </a-col>
                                <a-col :span="3">
                                    <a-popover trigger="focus">
                                        <template #title>
                                            <MailOutlined /><span style="margin-left:8px">我的邮件</span>
                                        </template>
                                        <template #content>
                                            <EmailList />
                                        </template>
                                        <a-button shape="circle" :icon="h(BellOutlined)"></a-button>
                                    </a-popover>
                                </a-col>

                                <a-col :span="3"><a-button shape="circle" :icon="h(SettingOutlined)"
                                        @click="handleRouter('/setting')"></a-button></a-col>
                                <a-col :span="3">
                                    <a-popconfirm placement="leftBottom" title="确定退出登录" ok-text="确定" cancel-text="取消"
                                        @confirm="confirmLogout" @cancel="cancelLogout">
                                        <a-button shape="circle" :icon="h(PoweroffOutlined)"></a-button>
                                    </a-popconfirm>
                                </a-col>
                            </a-row>
                        </div>
                    </a-col>
                </a-row>
            </a-layout-header>
            <a-layout-content>
                <div style="padding:16px;">
                    <slot></slot>
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                海洋科普网后台管理系统 ©2024 Created by 第9组
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<style scoped>
.title {
    color: var(--jjext-color-input-bg);
    margin: auto 16px auto auto;
    font-size: 1.2em;
    font-family: '楷体';
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.username {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 8px;
}

.gutter-box {
    text-align: right;
}

.logo {
    height: 32px;
    margin: 16px;
    /* background: rgba(255, 255, 255, 0.3); */
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>