<template>
    <a-card :title="title" :extra="extra">
        <a-statistic :value="content" style="margin-right: 50px" />
    </a-card>
</template>

<script setup>
const props = defineProps({
    title: String,
    content: {
        type: [String, Number],
        default: ''
    },
    extra: String
});
</script>

<style scoped>
a-card {
    margin-bottom: 16px;
}
</style>