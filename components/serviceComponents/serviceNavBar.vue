<template>
    <div class="nav_bar">
        <cube-button class="back_btn_service" @click="back">&#60;</cube-button>
        <div class="service_box" style="height: 190px;width:100%;">
            <div style="height: 50px;width:100%;text-align:center;font-size:30px;font-family: 幼圆;color: white;margin-top: 0px">服 务 详 情</div>
            <div style="display: inline-flex">
                <div class="img_box" style="">
                    <img :src="img" style=" box-shadow: 0 0 20px white;margin-top:5px;height: 100px;border-radius: 20px">
                </div>
                <div class="detail_box">
                    <div  style="display: inline-flex;margin-bottom: 5%;width: 100%">
                        <div style="font-family:'幼圆';color:white;font-size: 25px;width: 150px">{{serviceName}}</div>
                        <div style="color:white;font-size: 23px;margin-left: 10%;width: 100px">￥ {{servicePrice}}</div>
                    </div>
                    <div style="font-family:'华文新楷';color:white;font-size: 16px;margin-bottom: 5%">{{serviceInfo}}</div>
                    <div style="font-family:'华文仿宋';color:white;font-size: 15px">{{serviceStruct}}</div>
                </div>
            </div>

        </div>
        <div class="tab_bar_box">
            <cube-tab-bar class="tab_bar"
                          v-model="selectedLabelDefault"
                          :data="tabs"
                          :showSlider="true"
                          @click="clickHandler">
            </cube-tab-bar>
        </div>
        <div style="width: 90%;margin-left: 5%">
            <router-view></router-view>
        </div>
        <div>
            <cube-button class="confer" @click="createOrder">预 约 服 务</cube-button>
        </div>

    </div>
</template>

<script>
    import router from "@/router";
    export default {
        name: "serviceNavBar",
        created(){
                this.serviceName=this.$route.query.mitem.name,
                this.serviceID=this.$route.query.mitem.uid,
                this.servicePrice=this.$route.query.mitem.price,
                this.serviceInfo=this.$route.query.mitem.description,
                this.serviceStruct=this.$route.query.mitem.ins
        },
        data () {
            return {
                img:require("../../assets/服务封面.png"),
                serviceName:window.sessionStorage.getItem('servename'),
                serviceID:"1",
                servicePrice:'￥25',
                serviceInfo:'针对生活在自己家，能够生活自理的老年人',
                serviceStruct:'我为高居家服务',
                selectedLabelDefault: '服务详情',
                tabs: [{
                    label: '服务详情',
                }, {
                    label: '机构详情',
                }, {
                    label: '用户评价',
                }]
            }
        },
        methods: {
            back(){
                this.$router.push('/homepage')
            },
            clickHandler (label) {
                // if you clicked home tab, then print 'Home'
                if(label=='服务详情'){
                    router.push({
                        path:'/serviceDetails',
                        query:this.serviceID
                    })
                }
                if(label=='机构详情'){
                    router.push({
                        path:'/structDetails',
                        query:this.serviceID
                    })
                }
                if(label=='用户评价'){
                    router.push({
                        path:'/userComments',
                        query:this.serviceID
                    })
                }

                console.log(label)
            },
            createOrder(){
                this.$router.push({path:"/createOrder",
                query:{
                    mitem:this.$route.query.mitem,
                }})
            },
            getInit(){

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .back_btn_service
        position absolute
        top -10px
        left 0px
        font-size 30px
        height 20px
        width 20px
        background-color transparent
    .service_box
        background-color orangered
        border-radius 10px
    .img_box
        height:160px;
        margin-right: 5%;
        margin-top: 10px;
        margin-left: 10px;
        border-radius 20px
        border-color white

    .detail_box
        height 180px
    .nav_bar
        height 2vh
        background #fff
    .tab_bar_box
        width 100%
        z-index 999
        /*position fixed*/
        /*top 25%*/
    .tab_bar
        background #FFF
        height 5%
        font-size 25px
        color coral
    .confer
        position fixed
        height 50px
        width 80%
        margin-left 10%
        bottom 3%
        border-radius 30px
        font-size 22px
        background-color orangered
        color white

</style>