<template>
    <div ref="lineChartRef" class="lineChartContainer"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import * as echarts from 'echarts';

const lineChartRef = ref(null);

const props = defineProps({
    chartData: {
        type: Object,
        required: true
    }
});

const initLineChart = () => {
    const lineChart = echarts.init(lineChartRef.value);
    const option = {
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
            type: 'line',
            data: props.chartData.yAxisData
        }]
    };
    lineChart.setOption(option);
};

watch(props, (newProps) => {
    if (newProps.chartData) {
        initLineChart();
    }
}, { deep: true });
</script>

<style scoped>
.lineChartContainer {
    height: 300px;
    background-color: #fff;
}
</style>