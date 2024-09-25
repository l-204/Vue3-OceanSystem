<template>
    <Layout>
        <!-- 第一行：四张卡片 -->
        <a-row :gutter="[16, 16]">
            <a-col :span="6" v-for="(card, index) in cards" :key="index">
                <CardItem :title="card.title" :content="card.content" :extra="card.extra" />
            </a-col>
        </a-row>

        <!-- 第二行：柱状图和饼图 -->
        <a-row :gutter="[16, 16]" style="margin: 20px 0;">
            <a-col :span="16">
                <BarChart :chartData="BarData" />
            </a-col>
            <a-col :span="8">
                <PieChart :chartData="PieData" />
            </a-col>
        </a-row>

        <!-- 第三行：折线图 -->
        <a-row>
            <a-col :span="24">
                <LineChart :chartData="LineData" />
            </a-col>
        </a-row>
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import Layout from '@/layout/index.vue';
import CardItem from './CardItem.vue';
import BarChart from './BarChart.vue';
import PieChart from './PieChart.vue';
import LineChart from './LineChart.vue';


import { userApi, statisticsApi, showApi } from '@/api';


// 卡片数据

const cards = ref([
    { title: '今日用户数', extra: '', content: '正在获取数据...' },
    { title: '本周用户数', extra: '', content: '正在获取数据...' },
    { title: '最大样本数', extra: '', content: '正在获取数据...' },
    { title: '最小样本数', extra: '', content: '正在获取数据...' },
]);

// 柱状图
const BarData = ref({})
const getUserList = async () => {

    const res = await userApi.userList();

    const userList = res.data;

    console.log(userList)
    let xAxisData = [];
    let yAxisData = [];

    const today = dayjs().startOf('day');
    const oneWeekAgo = today.subtract(6, 'day');

    const filteredUsers = userList.filter(user => {
        const createTime = dayjs(user.createTime);
        return createTime.isAfter(oneWeekAgo);
    });

    const dailyUserCounts = {};
    filteredUsers.forEach(user => {
        const date = dayjs(user.createTime).format('YYYY-MM-DD');
        dailyUserCounts[date] = (dailyUserCounts[date] || 0) + 1;
    });

    // 统计今日用户数
    cards.value[0].content = dailyUserCounts[today.format('YYYY-MM-DD')] || 0;

    // 统计本周用户总数
    cards.value[1].content = Object.values(dailyUserCounts).reduce((acc, val) => acc + val, 0);

    // 生成一周内的所有日期
    const allDates = [];
    for (let i = 0; i < 7; i++) {
        allDates.push(dayjs(oneWeekAgo).add(i, 'day').format('YYYY-MM-DD'));
    }

    // 填充缺失的日期并将其对应的用户数设为 0
    allDates.forEach(date => {
        xAxisData.push(date);
        yAxisData.push(dailyUserCounts[date] || 0);
    });


    BarData.value = { xAxisData: xAxisData, yAxisData: yAxisData }
    // console.log(BarData.value)
}
// 饼图
const PieData = ref([])
const getStaticPage = async () => {
    const body = {
        page: "1",
        pageSize: "20",
    }
    const res = await statisticsApi.statisticsPage(body)

    PieData.value = calculateTopFive(res.data.list);

    // 统计最大样本数和最小样本数
    const maxItem = PieData.value[0];
    const minItem = PieData.value[PieData.value.length - 1];

    cards.value[2].content = maxItem.value;
    cards.value[2].extra = maxItem.name;
    cards.value[3].content = minItem.value;
    cards.value[3].extra = minItem.name;

}

const calculateTopFive = (list) => {
    // 按 num 值降序排序
    const sortedList = list.sort((a, b) => b.num - a.num);
    // 提取前五个对象的 num 和 name 值
    const topFive = sortedList.slice(0, 5).map(item => ({
        value: item.num,
        name: item.name
    }));

    return topFive;

};
const LineData = ref([])
// 折线图
const getSimplePage = async () => {
    const body = {
        page: "1",
        pageSize: "100",
        species: "",
        name: "",
    };

    const res = await showApi.simplePage(body);

    const simpleList = res.data.list;
    let xAxisData = [];
    let yAxisData = [];

    const today = dayjs().startOf('day');
    const oneWeekAgo = today.subtract(6, 'day');

    const filteredsimples = simpleList.filter(simple => {
        const createTime = dayjs(simple.createTime);
        return createTime.isAfter(oneWeekAgo);
    });

    const dailysimpleCounts = {};
    filteredsimples.forEach(simple => {
        const date = dayjs(simple.createTime).format('YYYY-MM-DD');
        dailysimpleCounts[date] = (dailysimpleCounts[date] || 0) + 1;
    });

    // 生成一周内的所有日期
    const allDates = [];
    for (let i = 0; i < 7; i++) {
        allDates.push(dayjs(oneWeekAgo).add(i, 'day').format('YYYY-MM-DD'));
    }

    // 填充缺失的日期并将其对应的样本数设为 0
    allDates.forEach(date => {
        xAxisData.push(date);
        yAxisData.push(dailysimpleCounts[date] || 0);
    });

    LineData.value = { xAxisData: xAxisData, yAxisData: yAxisData };

    console.log(LineData.value);
};


onMounted(() => {
    getUserList()
    getStaticPage()
    getSimplePage()
})
</script>

<style scoped>
a-card {
    margin-bottom: 16px;
}

/* 保证图表容器的高度 */
div[ref="barChartRef"],
div[ref="pieChartRef"],
div[ref="lineChartRef"] {
    height: 300px;
}
</style>