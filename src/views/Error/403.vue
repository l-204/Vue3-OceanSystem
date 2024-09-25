<template>
    <div class="container">
        <a-result status="403" title="403" sub-title="抱歉，您无权访问此页面.">
            <template #extra>
                <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
            </template>
        </a-result>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}
</style>