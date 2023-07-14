var ecLeft2 = echarts.init(document.getElementById('l2'));

left2Option = {
    title: {
        text: '全国新增趋势',
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
        data: []
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
        data: ['新增确诊', '新增疑似', '新增治愈', '新增死亡'],
        left: 'right',
        textStyle: {
            color: 'white'
        }
    },
    series: [
        {
            name: '新增确诊',
            type: 'line',
            //smooth: true,
            data: []
        },
        {
            name: '新增疑似',
            type: 'line',
            //smooth: true,
            data: []
        },
        {
            name: '新增治愈',
            type: 'line',
            //smooth: true,
            data: []
        },
        {
            name: '新增死亡',
            type: 'line',
            //smooth: true,
            data: []
        },
    ]
};
ecLeft2.setOption(left2Option);