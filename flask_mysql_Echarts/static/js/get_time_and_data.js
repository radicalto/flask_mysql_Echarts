// 时间
function getTime(){
    var $time = $('#time')
    $.ajax({
        url:'/time',
        timeout:10000,
        success:function (res){
            $time.html(res)
        },
        error:function (){
            alert('请求错误')
        }
    })
}

// 四个数据 c1
function get_c1_data(){
    var $data_txt = $('.num h1')
    $.ajax({
        url:'/c1',
        timeout:10000,
        success:function (res){
            $data_txt.eq(0).text(res.confirm)
            $data_txt.eq(1).text(res.confirm_add)
            $data_txt.eq(2).text(res.heal)
            $data_txt.eq(3).text(res.dead)
        },
        error:function (){
            alert('请求错误')
        }
    })
}

// 地图数据c2
function get_c2_data(){
    $.ajax({
        url:'/c2',
        timeout:10000,
        success:function (res){
            mapOption.series[0].data=res.c2_Data;
            echartsMap.setOption(mapOption);
        },
        error:function (){
            alert('请求错误')
        }
    })
}

// ec-l1-data  折线图
function get_l1_data(){
    $.ajax({
        url:'/l1',
        timeout:10000,
        success:function (res){
            left1Option.xAxis[0].data=res.day;
            left1Option.series[0].data=res.confirm;
            left1Option.series[1].data=res.suspect;
            left1Option.series[2].data=res.heal;
            left1Option.series[3].data=res.dead;
            ecLeft1.setOption(left1Option);
        },
        error:function (){
            alert('请求错误')
        }
    })
}

// ec-l2-data  折线图
function get_l2_data(){
    $.ajax({
        url:'/l2',
        timeout:10000,
        success:function (res){
            left2Option.xAxis[0].data=res.day;
            left2Option.series[0].data=res.confirm_add;
            left2Option.series[1].data=res.suspect_add;
            left2Option.series[2].data=res.heal_add;
            left2Option.series[3].data=res.dead_add;
            ecLeft2.setOption(left2Option);
        },
        error:function (){
            alert('请求错误')
        }
    })
}

// ec-r1-data  柱状图
function get_r1_data(){
    $.ajax({
        url:'/r1',
        timeout:10000,
        success:function (res){
            right1Option.xAxis.data=res.city;
            right1Option.series[0].data=res.confirm;
            ecright1.setOption(right1Option);
        },
        error:function (){
            alert('请求错误')
        }
    })
}

// ec-r2-data  柱状图
function get_r2_data(){
    $.ajax({
        url:'/r2',
        timeout:10000,
        success:function (res){
            wordCloudOption.series[0].data = res.keyData;
            console.log(wordCloudOption.series[0].data)
            ecWordCloud.setOption(wordCloudOption);
        },
        error:function (){
            alert('请求错误')
        }
    })
}

$(function (){
    getTime()
    setInterval(getTime,1000)
    get_c1_data()
    setInterval(get_c1_data,1000)
    get_c2_data()
    get_l1_data()
    get_l2_data()
    get_r1_data()
    get_r2_data()
})