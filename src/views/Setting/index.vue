<template>
    <Layout>
        <div class="settings-container">
            <a-card title="系统设置">
                <a-row :gutter="16">
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="100" status="success" />
                            <div class="progress-label">开发进度</div>
                        </div>
                    </a-col>
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="100" status="success" />
                            <div class="progress-label">成员分工</div>
                        </div>
                    </a-col>
                </a-row>

                <a-row :gutter="16" class="mt-16">
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="100" status="success" />
                            <div class="progress-label">测试进度</div>
                        </div>
                    </a-col>
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="100" status="success" />
                            <div class="progress-label">部署进度</div>
                        </div>
                    </a-col>
                </a-row>

                <a-row :gutter="16" class="mt-16">
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="100" status="success" />
                            <div class="progress-label">测试进度</div>
                        </div>
                    </a-col>
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="100" status="success" />
                            <div class="progress-label">部署进度</div>
                        </div>
                    </a-col>
                </a-row>

                <a-row :gutter="16" class="mt-16">
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="0" status="exception" />
                            <div class="progress-label">答辩进度</div>
                        </div>
                    </a-col>
                    <a-col :span="12">
                        <div class="progress-section">
                            <a-progress :percent="10" status="active" />
                            <div class="progress-label">报告进度</div>
                        </div>
                    </a-col>
                </a-row>
            </a-card>
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/layout/index.vue';
</script>

<style scoped>
.settings-container {
    padding: 24px;
}

.progress-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
}

.progress-label {
    margin-top: 8px;
    font-size: 14px;
    color: #666;
}

.mt-16 {
    margin-top: 16px;
}
</style>