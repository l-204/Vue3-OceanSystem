<template>
    <div class="emailListContainer">
        <div @click="openDrawer(item)" class="emailItem" v-for="item in messageList" :key="item.id">
            <a-comment>
                <template #author><a>{{ item.author }}</a></template>
                <template #avatar>
                    <a-avatar :src="item.avatar" :alt="item.author" />
                </template>
                <template #content>
                    <div class="eamilContent">
                        {{ item.content }}
                    </div>
                </template>
                <template #datetime>
                    <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                        <span>{{ dayjs().fromNow() }}</span>
                    </a-tooltip>
                </template>
            </a-comment>

            <a-drawer v-model:open="open" title="邮件详情" placement="right">
                <a-comment>
                    <template #author><a>{{ itemDetail.author }}</a></template>
                    <template #avatar>
                        <a-avatar :src="itemDetail.avatar" :alt="itemDetail.author" />
                    </template>
                    <template #content>
                        <div>{{ itemDetail.content }}</div>
                    </template>
                    <template #datetime>
                        <a-tooltip :title="dayjs().format('YYYY-MM-DD HH:mm:ss')">
                            <span>{{ dayjs().fromNow() }}</span>
                        </a-tooltip>
                    </template>
                </a-comment>
            </a-drawer>
        </div>
    </div>
</template>
<script setup>
import dayjs from 'dayjs';
import { ref } from 'vue';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const open = ref(false);
const itemDetail = ref(null)
const openDrawer = (item) => {
    itemDetail.value = item; // 将点击的 item 保存到 itemDetail 中
    open.value = true;
}
const messageList = [
    {
        id: 1,
        author: 'Han Solo',
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=1`,
        content: `We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.`
    },
    {
        id: 2,
        author: 'Leia Organa',
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=2`,
        content: `The Force is strong with this one. May the Force be with you always.`
    },
    {
        id: 3,
        author: 'Luke Skywalker',
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=3`,
        content: `I have a bad feeling about this. Trust in the Force, young Padawan.`
    },
    {
        id: 4,
        author: 'Obi-Wan Kenobi',
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=4`,
        content: `You were the chosen one! It's time to face the truth and embrace your destiny.`
    },
    {
        id: 5,
        author: 'Darth Vader',
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=5`,
        content: `Join me, and together we can rule the galaxy as father and son.`
    },
]
</script>

<style scoped>
.emailListContainer {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    overflow: auto;
}

.emailItem:hover {
    cursor: pointer;
}

.eamilContent {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>