<template>
    <div ref="barChartRef" class="barChartContainer"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';


const barChartRef = ref(null);

const props = defineProps({
    chartData: {
        type: Object,
        required: true
    }
});


const initBarChart = () => {
    const barChart = echarts.init(barChartRef.value);

    const option = {
        title: { text: '最近一周内用户数' },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            data: props.chartData.xAxisData
        },
        yAxis: {},
        series: [{
            type: 'bar',
            data: props.chartData.yAxisData
        }]
    };
    barChart.setOption(option);
};

watch(props, (newProps) => {
    if (newProps.chartData) {
        initBarChart();
    }
}, { deep: true });
</script>

<style scoped>
.barChartContainer {
    height: 300px;
    background-color: #fff;
    padding: 20px;
}
</style>