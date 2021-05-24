<template>
    <div class="background" style="">
        <div class="slide_pic">
            <cube-slide style="border-radius:0px;height: 200px;width: 100%" :data="items"></cube-slide>
        </div>
        <div style="display: inline-flex;
                    margin-left: 20px;
                    margin-top: 10px;
                    width: 130px;
                    height: 50px;
                    padding: 10px;
                    border-radius: 15px 15px 0 0;
                    background-color: white;
                    position: absolute;
                    top:165px">
            <img src="../assets/icon/监测.png" height="30" width="30"/>
            <div style="color: #696969;font-size: 20px;
                    font-family: '微软雅黑 Light';
                    color: black;
                    margin-top: 6px;">日常监测</div>
        </div>
        <cube-button class="hkeeping"  style="
                    right: 0px;
                    margin-top: 0px;
                    width: 50px;
                    height: 140px;
                    padding: 10px;
                    border-radius: 20px 0 0 15px;
                    position: absolute;
                    z-index: 10;
                    top:165px" @click="healthkeeping">
            <img src="../assets/icon/养生.png" height="30" width="30"/>
            <div style="color: #696969;font-size: 20px;
                    font-family: '微软雅黑 Light';
                    color: black;
                    margin-top: 6px;">养<br/>生<br/>知<br/>识</div>
        </cube-button>
        <cube-button class="sugar" style="
                    right: 0px;
                    margin-top: 140px;
                    width: 50px;
                    height: 160px;
                    padding: 10px;
                    border-radius: 20px 0 0 15px;
                    background-color: #ffe4e1;
                    position: absolute;
                    z-index: 10;
                    top:165px" @click="sugarCalculator">
            <img src="../assets/icon/控糖目标.png" height="30" width="30"/>
            <div style="color: #696969;font-size: 20px;
                    font-family: '微软雅黑 Light';
                    color: black;
                    margin-top: 6px;">糖<br/>份<br/>计<br/>算<br/>器</div>
        </cube-button>
        <cube-button  style="
                    right: 0px;
                    margin-top: 300px;
                    width: 50px;
                    height: 140px;
                    padding: 10px;
                    border-radius: 15px 0 0 15px;
                    background-color: #e0ffff;
                    position: absolute;
                    z-index: 10;
                    top:165px" @click="medicine">
            <img src="../assets/icon/药.png" height="30" width="30"/>
            <div style="color: #696969;font-size: 20px;
                    font-family: '微软雅黑 Light';
                    color: black;
                    margin-top: 6px;">服<br/>药<br/>规<br/>划</div>
        </cube-button>
        <button class="add"  @click="addRecord"><img src="../assets/icon/添加.png" height="50" width="50"/></button>
        <div class="contain_box">
            <cube-scroll ref="scroll" style="height: 460px;width:90%;margin-top:20px;z-index: 8">
                <ul>
                    <div v-for=" (services,i) in Olds" :key="i">
                        <health-card style="margin-top: 15px;margin-bottom: 20px" :mitem="services">
                        </health-card>
                    </div>
                </ul>
            </cube-scroll>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Health",
        created(){
            this.getRecord()
        },
        methods:{
            healthkeeping(){
                this.$router.push('/healthkeeping')
            },
            sugarCalculator(){
                this.$router.push('/sugarcalculator')
            },
            medicine(){
                this.$router.push('/medicine')
            },
            addRecord(){
              this.$router.push('/addRecord')
             },
            getRecord(){
              this.$axios({
                  method:'post',
                  url:this.$requireIP+'user/showhealth',
                  data:{
                      name:window.localStorage.getItem('name')
                  }
              }).then(response=>{
                    this.Olds=response.data
              })
            }
        },
        data(){
            return{
                items: [
                    {
                        image: require("../assets/lunbotu.png")
                    },
                    {
                        image: require("../assets/lunbotu.png")
                    },
                    {
                        image: require("../assets/lunbotu.png")
                    }
                ],
                Olds:[{
                    name:'wang',
                    age:'78',
                    marry:'已婚',
                    health:'健康',
                    life:'完全自理',
                    sugar:160,
                    heart:75,
                    systolic:120,
                    dilational:90
                },{
                    name:'wang',
                    age:'78',
                    marry:'已婚',
                    health:'健康',
                    life:'完全自理',
                    sugar:160,
                    heart:75,
                    systolic:120,
                    dilational:90
                },{
                    name:'wang',
                    age:'78',
                    marry:'已婚',
                    health:'健康',
                    life:'完全自理',
                    sugar:160,
                    heart:75,
                    systolic:120,
                    dilational:90
                },{
                    name:'wang',
                    age:'78',
                    marry:'已婚',
                    health:'健康',
                    life:'完全自理',
                    sugar:160,
                    heart:75,
                    systolic:120,
                    dilational:90
                },{
                    name:'wang',
                    age:'78',
                    marry:'已婚',
                    health:'健康',
                    life:'完全自理',
                    sugar:160,
                    heart:75,
                    systolic:120,
                    dilational:90
                }]
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .background
        background-image url("../assets/背景横.png")
        background-size cover
        height 850px
    .slide_pic
        margin-bottom 2%
        z-index 0
        border-radius 0px
        width 100%
    .add
        height 80px
        width 80px
        border-radius 50%
        font-size x-large
        position fixed
        bottom 60px
        right 50px
        background-color white
        z-index 999
    .contain_box
        width 90%
        margin-left 5%
        background-color:white;
        border-radius 20px
    .hkeeping
        background-image url("../assets/button/养生.png")
        background-size cover
    .sugar
        background-image url("../assets/button/糖按钮.png")
        background-size cover
   </style>