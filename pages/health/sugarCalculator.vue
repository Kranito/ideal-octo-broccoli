<template>
    <div class="background">
        <cube-button  class="back_btn" @click="back"></cube-button>
        <div class="sugar_num">
            <div style="font-size: 30px">
                今日已摄入糖分:<br/>
            </div>
            <div style="font-size: 35px;text-align: center">{{this.form.sugar}}/300g</div>
            <div style="font-size: 30px">
                建议仍可摄入糖分量:<br/>
            </div>
            <div style="font-size: 35px;text-align: center">{{this.form.sugarleft}}g/300g</div>
        </div>
        <div class="sugar_record">
            <div style="font-size: 25px;margin-top:15px;text-align: center">饮食记录</div>
            <cube-scroll style="height: 250px;background-color: transparent;width: 90%;margin-left: 5%;font-size: 25px">
                <ul>
                    <div style="display: inline-flex" v-for="(record,i) in foodrecord" :key="i">
                        <div class="record_tab">{{record.foodname}}</div>
                        <div class="record_tab">{{record.amount}}</div>
                        <div class="record_tab">{{record.time}}</div>
                    </div>
                </ul>
            </cube-scroll>
        </div>
        <div class="add_box">
            <div style="font-size: 30px;text-align: center;margin-bottom: 3px;font-family: 幼圆">添加</div>
            <el-form  ref="form" :model="form" label-width="80px">
                <el-form-item label="食物种类">
                    <el-cascader
                            v-model="value"
                            :options="options"
                            ></el-cascader>
                </el-form-item>
                <el-form-item label="重量">
                    <el-input v-model="form.foodnum"
                              @change="calculatesugaradd"
                              style="width: 80%" placeholder="请输入重量（克）"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <cube-button class="add_food" @click="addfood">添加</cube-button>
        <div style="font-size: 20px;margin-top:10px;text-align: center">本次摄入糖分：{{this.form.sugaradd}} 克</div>
    </div>
</template>

<script>
    export default {
        name: "sugarCalculator",
        methods:{
            calculatesugaradd(){
                var s=0;
                s=parseInt(this.value[1]) *parseInt(this.form.foodnum);
                this.form.sugaradd=s/100;
                console.log(s)
            },
            back(){this.$router.push('/health')},
            addfood(){
                if(this.form.sugaradd === ''){
                    this.$message.error("请选择添加食物及数量")
                }else{
                    this.form.sugar+=this.form.sugaradd;
                    this.form.sugarleft-=this.form.sugaradd;
                }
            }
        },
        data(){
            return{
                form:{
                    food:'',
                    foodnum:'',
                    sugar:0,
                    sugarleft:300,
                    sugaradd:'',
                },
                value:[],
                options:[
                    {
                        value:'0',
                        label:'水果',
                        children:[
                            {
                                value:'14',
                                label:'苹果',
                            }, {
                                value:'20',
                                label:'西瓜',
                            }, {
                                value:'18',
                                label:'香蕉',
                            },{
                                value:'11',
                                label:'桔子',
                            }, {
                                value:'11.5',
                                label:'梨',
                            }, {
                                value:'12',
                                label:'沙果',
                            },{
                                value:'14',
                                label:'荔枝',
                            }, {
                                value:'14',
                                label:'石榴',
                            }, {
                                value:'23',
                                label:'甘蔗',
                            },{
                                value:'20',
                                label:'哈密瓜',
                            },
                        ],
                    }, {
                        value:'0',
                        label:'蔬菜',
                        children:[{
                            value:'80',
                            label:'土豆',
                        },
                            {
                            value:'12',
                            label:'青菜',
                        }, {
                            value:'83',
                            label:'地瓜',
                        },{
                            value:'41',
                            label:'胡萝卜',
                        }, {
                            value:'22',
                            label:'豆芽',
                        }
                        ],
                    }, {
                        value:'0',
                        label:'面食蛋奶类',
                        children:[{
                            value:'76',
                            label:'大米',
                        }, {
                            value:'77',
                            label:'小米',
                        }, {
                            value:'49',
                            label:'馒头',
                        }, {
                            value:'57',
                            label:'面条',
                        }, {
                            value:'93',
                            label:'面包',
                        }, {
                            value:'56.2',
                            label:'云吞皮',
                        }, {
                            value:'1.3',
                            label:'鸡蛋',
                        }, {
                            value:'1',
                            label:'鸭蛋',
                        }, {
                            value:'1.2',
                            label:'蛋清',
                        },{
                            value:'3',
                            label:'豆腐',
                        }, {
                            value:'7',
                            label:'豆丝',
                        }, {
                            value:'1',
                            label:'豆腐脑',
                        },{
                            value:'1.2',
                            label:'豆花',
                        }, {
                            value:'4.1',
                            label:'豆干',
                        }, ],
                    }
                ],
                foodrecord:[{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                },{
                    foodname:'馒头',
                    amount:'20g',
                    sugar:'8g',
                    date:'2021-06-10',
                    time:'19:00:00'
                }]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .background
        height 100%
        background-image url("../../assets/糖背景.png")
        background-size 100% 100%
    .back_btn
        width 42px
        height 42px
        background-image url("../../assets/icon/养生返回.png")
        background-size cover
        background-color transparent
        position absolute
        right  10px
        top 20px
    .add_food
        width 60%
        border-radius 0 20px 0 20px
        background-color hotpink
        margin-left 20%
        margin-top 10px
    .add_box
        background-color rgba(255,255,255,0.7)
        width 90%
        margin-left 5%
        border-radius 30px
        margin-top 1%
        padding 5px
    .sugar_num
        background-color rgba(255,153,204,0.4)
        width 96%
        margin-left 2%
        border-radius 10px
    .record_tab
        margin-left 10px
        margin-right 10px
        height 30px
        padding 3px
        /*box-shadow 0 0 3px white*/
        text-align center
        width 85px



</style>