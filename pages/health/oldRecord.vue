<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" style="display: inline-flex">
            <img src="../../assets/icon/041-grandfather.png" class="image">
            <div class="info_message">
                <span style="font-size: 18px">{{mitem.name}}</span>
                <div class="content"><span class="content" style="font-size: 15px">{{mitem.age}}岁</span></div>
                <span style="font-size: 18px">健康状况：{{mitem.health}}</span>
                <span style="font-size: 18px">自理状况：{{mitem.life}}</span>
            </div>
        </el-card>
        <div id="main" style="height:300px;width:100%;magrin-bottom:'30px'"></div>
        <div id="sugar" style="height:300px;width:100%"></div>
        <cube-button class="backbtn" @click="goback">返回首页</cube-button>
    </div>

</template>

<script>
    import * as echarts from 'echarts';

    export default {
        name: "oldRecord",
        mounted(){
            this.drawChart();
            this.drawSugar();
            this.mitem=this.$route.query.mitem
        },
        data(){
          return{
              mitem:{

              }
          }
        },
        methods:{
            goback(){
                this.$router.push('/home')
            },
            drawChart(){
                var chartDom = document.getElementById('main');
                var myChart = echarts.init(chartDom);
                var option;
                var d =new Date()

                option = {
                    title: {
                        text: '血压变化情况'
                    },
                    color:['#FF0000','#adff2f'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['收缩压','舒张压']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLabel: {
                            formatter: '{value} 日'
                        },
                        data: [(d.getDate()-6+31)%31, (d.getDate()-5+31)%31,(d.getDate()-4+31)%31, (d.getDate()-3+31)%31, (d.getDate()-2+31)%31, (d.getDate()-1+31)%31, "今"]
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} HHmg'
                        },
                    },
                    series: [
                        {
                            name: '收缩压',
                            type: 'line',
                            stack: '总量',
                            data: [120, 130, 110, 130, 120, 130, 110]
                        },
                        {
                            name: '舒张压',
                            type: 'line',
                            data: [80, 90, 80, 70, 90, 80, 100]//没有默认为null
                        }
                    ]
                };

                myChart.setOption(option);
            },
            drawSugar(){
                var chartDom = document.getElementById('sugar');
                var myChart = echarts.init(chartDom);
                var option;

                option = {
                    title: {
                        text: '血糖变化',
                    },
                    color:['#C1232B','#9BCA63'],

                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} mmol/L'
                        },

                    },
                    visualMap: {
                        show: false,
                        dimension: 0,
                        pieces: [{
                            lte: 6,
                            color: 'green'
                        }, {
                            gt: 6,
                            lte: 8,
                            color: 'green'
                        }, {
                            gt: 8,
                            lte: 14,
                            color: 'green'
                        }, {
                            gt: 14,
                            lte: 17,
                            color: 'green'
                        }, {
                            gt: 17,
                            color: 'green'
                        }]
                    },
                    series: [
                        {
                            name: '血糖',
                            type: 'line',
                            smooth: true,
                            data: [300, 280, 260,  300, 550,  400, 390, 380, 600, 800, 400],
                            markArea: {
                                itemStyle: {
                                    color: 'rgba(255, 173, 177, 0.4)'
                                },
                                data: [ [{
                                    name: '血糖过高',
                                    yAxis: '500'
                                }, {
                                    yAxis: '1000'
                                }], ]
                            }
                        }
                    ]
                };

                option && myChart.setOption(option);

            }
        }
    }
</script>

<style scoped>
    .image {
        width: 35%;
        float: left;
    }
    .info_message{
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-content: flex-start;
    }
    .info_message span{
        display: flex;
        line-height: 12px;
        padding: 10px;
    }
    .content{
        color: #909399;
        font-size: 15px;
    }
    .serve-card{
        border-radius: 30px;
    }
    .backbtn{
        width: 60%;
        margin-left: 20%;
        border-radius: 30px;
        background-color: orangered;
        font-size: 22px;
        color: white;
    }

</style>