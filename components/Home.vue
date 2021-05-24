<template>
    <div class="home_box">
        <div class="slide_pic">
            <cube-slide style="height: 200px;width: 100%" :data="items"></cube-slide>
        </div>
        <div style="position: absolute;top:160px" >
            <div class="service_group" >
                <div class="service_group_button1" >
                    <cube-button class="bt1" @click="ClickHandler('生活照料')" >生活照料</cube-button>
                    <cube-button class="bt2" @click="ClickHandler('保姆护工')">保姆护工</cube-button>
                    <cube-button class="bt3" @click="ClickHandler('家庭床位')">家庭床位</cube-button>
                </div>

                <div class="service_group_button2" >
                    <cube-button class="bt4" @click="ClickHandler('康复服务')">康复服务</cube-button>
                    <cube-button class="bt5" @click="ClickHandler('居家改造')">居家改造</cube-button>
                    <cube-button class="bt6" @click="ClickHandler('机构养老')">机构养老</cube-button>
                </div>
            </div>
            <div style="height: 80%">
                <div style="display: inline-flex;margin-left: 20px">
                    <img src="../assets/icon/火箭.png" height="30" width="30"/>
                    <p style="font-weight:bold;font-family:'微软雅黑 Light';font-size: 18px;margin-bottom: 10px;margin-top: 10px">热门服务</p>
                </div>
                <div class="hot_serve">
                    <cube-scroll ref="scroll">
                        <ul >
                            <div v-for=" (services,i) in HotServices" :key="i">
                                <serve-card style="margin-top: 10px" :mitem="services">
                                </serve-card>
                            </div>
                        </ul>
                    </cube-scroll>
                </div>
                <div style="display: inline-flex;margin-left: 20px">
                    <img src="../assets/icon/宠物联谊.png" height="30" width="30"/>
                    <p style="font-weight:bold;font-family:'微软雅黑 Light';font-size: 18px;margin-bottom: 10px;margin-top: 10px">推荐服务 </p>
                </div>
                <div class="recommend">
                    <cube-scroll ref="scroll">
                        <ul>
                            <div v-for=" (services,i) in RecommendServices" :key="i">
                                <serve-card style="margin-top: 10px" :mitem="services">
                                </serve-card>
                            </div>
                        </ul>
                    </cube-scroll>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Home",
        created(){
            this.getData()
        },
        methods:{
            ClickHandler(label){
                console.log(label);
                this.$router.push({path:"/servicelist",query:{type:label}});
            },
            getData(){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+"item/nominate",
                    data:''
                }).then(response=>{
                    this.RecommendServices=response.data
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
                HotServices:[{
                    img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg008.hc360.cn%2Fm8%2FM0F%2F52%2FF6%2FwKhQplcnMgmEfzCAAAAAAJQLjts836.jpg&refer=http%3A%2F%2Fimg008.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622711990&t=80cabefd3ffdebda1d5685d24dd74735",
                    name:'这是1个热门服务',
                    description:'这是简介',
                    price:"50元",
                    ins:'威高养老机构',
                    sc:'4.8',
                    url:'/service'
                },{
                    img: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2953364330,2107432910&fm=26&gp=0.jpg",
                    name:'这是2个热门服务',
                    discription:'这是简介',
                    sc:'5',
                    url:'/service'
                },{
                    img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1663408298,3639578325&fm=26&gp=0.jpg",
                    name:'这是3个热门服务',
                    discription:'这是简介',
                    sc:'4.5',
                    url:'/service'
                }],
                RecommendServices:[]
            }
        }

    }
</script>

<style lang="stylus" scoped>
    .home_box
        height 1300px
        background-color aliceblue
    .slide_pic
        margin-bottom 2%
        z-index 0
    .service_group
        text-align center
        border-radius 15px
        background-color white
        width 95%
        margin-left 2.5%
        margin-bottom 3%
    .service_group_button1
        margin-top 2%
        padding 1%
        margin-right 10%
        display inline-flex
    .service_group_button2
        padding 1%
        display inline-flex
        margin-right 10%
    .bt1
        background-image url("../assets/button/生活照料.png")
        background-size cover
        color white
        box-shadow 3px 3px 5px gray
        margin-bottom  3%
        margin-right 6%
        color transparent
        border-radius 10px

    .bt2
        background-image url("../assets/button/保姆护工.png")
        background-size cover
        box-shadow 3px 3px 5px gray
        margin-bottom  3%
        margin-right 6%
        color transparent
        border-radius 8px
    .bt3
        background-image url("../assets/button/家庭床位.png")
        background-size cover
        box-shadow 3px 3px 5px gray
        margin-bottom  3%
        margin-right 6%
        border-radius 8px
        color transparent

    .bt4
        background-color coral
        background-image url("../assets/button/康复服务.png")
        background-size cover
        color transparent
        box-shadow 3px 3px 5px gray
        margin-bottom  3%
        margin-right 6%
        border-radius 8px
    .bt5
        background-color hotpink
        background-image url("../assets/button/居家改造.png")
        background-size cover
        color transparent
        box-shadow 3px 3px 5px gray
        margin-bottom  3%
        margin-right 6%
        border-radius 8px
    .bt6
        background-color deeppink
        background-image url("../assets/button/机构养老.png")
        background-size cover
        color transparent
        box-shadow 3px 3px 5px gray
        margin-bottom  3%
        margin-right 6%
        border-radius 8px
    .recommend
        border-radius 10px
        box-shadow 3px 3px 2px gray
        margin-left 2.5%
        margin-bottom 150px
        height 600px
        width 95%
        background-color white
    .hot_serve
        border-radius 10px
        margin-bottom 3%
        margin-left 2.5%
        height 145px
        width 95%
        background-color white
        box-shadow 3px 3px 2px gray

</style>