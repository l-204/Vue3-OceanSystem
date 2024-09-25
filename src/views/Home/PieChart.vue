<template>
    <div ref="pieChartRef" class="pieChartContainer"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const pieChartRef = ref(null);

const props = defineProps({
    chartData: {
        type: Array,
        required: true
    }
});

const initPieChart = () => {
    const pieChart = echarts.init(pieChartRef.value);

    const option = {
        title: { text: '样本总数TOP5排行' },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: 0
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: props.chartData
            }
        ]
    };

    pieChart.setOption(option);
};

watch(props, (newProps) => {
    if (newProps.chartData && newProps.chartData.length > 0) {
        initPieChart();
    }
}, { deep: true });
</script>

<style scoped>
.pieChartContainer {
    height: 300px;
    background-color: #fff;
    padding: 20px;
}
</style>