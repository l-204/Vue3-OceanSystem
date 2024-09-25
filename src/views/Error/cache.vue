<script setup>
import imageSrc from "@/assets/svg/404.svg";
</script>

<template>
    <div class="container">
        <img :src="imageSrc" alt="404 找不到页面" class="image" />
        <h1 class="title">404 - 找不到页面</h1>
        <p class="description">当前页面不存在，请尝试其它地址.</p>
        <router-link to="/" class="link">返回首页</router-link>
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

.image {
    max-width: 300px;
    max-height: 300px;
}

.title {
    font-size: 2rem;
    margin-top: 20px;
}

.description {
    font-size: 1.2rem;
    margin-top: 10px;
}

.link {
    display: inline-block;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    transition: background-color 0.3s;
}

.link:hover {
    background-color: #0056b3;
}
</style>