var ecright1 = echarts.init(document.getElementById('r1'))

right1Option = {
    title: {
        text: '累计感染城市top5',
        textStyle: {color: 'white'},
        left: 'left'
    },
    grid: {
        left: '4%',
        right: '6%',
        bottom: '4%',
        top: 50,
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {color: '#7171C6'}
        }
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    emphasis: {
        itemStyle: {
            // 高亮时点的颜色。
            color: 'green'
        }
    },
    series: [
        {
            name: '累计感染',
            type: 'bar',
            data: []
        }
    ]
};
ecright1.setOption(right1Option)