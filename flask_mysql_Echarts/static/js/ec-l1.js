var ecLeft1 = echarts.init(document.getElementById('l1'));

left1Option = {
    title: {
        text: '全国累计趋势',
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
    xAxis: [{
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E']
    },],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            color: 'white',
            fontSize: 12,
            formatter: function (value) {
                if (value > 1000) {
                    value = value / 1000 + 'k';
                }
                return value;
            }
        },
        axisLine: {
            show: true
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#17273B',
                width: 1,
                type: 'solid'
            }
        }
    },],
    legend: {
        data: ['累计确诊', '现有疑似', '累计治愈', '累计死亡'],
        left: 'right',
        textStyle: {
            color: 'white'
        }
    },
    series: [
        {
            name: '累计确诊',
            type: 'line',
            smooth: true,
            data: [5, 8, 7, 9, 6]
        },
        {
            name: '现有疑似',
            type: 'line',
            smooth: true,
            data: [10, 6, 9, 3, 8]
        },
        {
            name: '累计治愈',
            type: 'line',
            smooth: true,
            data: [7, 4, 9, 2, 6]
        },
        {
            name: '累计死亡',
            type: 'line',
            smooth: true,
            data: [3, 8, 6, 7, 4]
        },
    ]
};
ecLeft1.setOption(left1Option);