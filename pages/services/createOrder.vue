<template>
    <div>
        <cube-button class="back_btn_create" @click="back">&#60;</cube-button>
        <div class="service_box" style="height: 190px;width:100%;">
            <div style="height: 50px;width:100%;text-align:center;font-size:30px;font-family: 幼圆;color: white;margin-top: 0px">服 务 详 情</div>
            <div style="display: inline-flex">
                <div class="img_box" style="">
                    <img :src="img" style=" box-shadow: 0 0 20px white;margin-top:5px;height: 100px;border-radius: 20px">
                </div>
                <div class="detail_box">
                    <div  style="display: inline-flex;margin-bottom: 5%;width: 100%">
                        <div style="font-family:'幼圆';color:white;font-size: 25px;width: 70%">{{serviceName}}</div>
                        <div style="color:white;font-size: 23px;margin-left: 10%;width: 30%">{{servicePrice}}</div>
                    </div>
                    <div style="font-family:'华文新楷';color:white;font-size: 16px;margin-bottom: 5%">{{serviceInfo}}</div>
                    <div style="font-family:'华文仿宋';color:white;font-size: 15px">{{serviceStruct}}</div>
                </div>
            </div>
        </div>
        <div style="width: 98%;margin-top:20px;margin-left: 1%">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
    import router from "@/router";
    export default {
        name: "order",
        created(){
            router.push('/homebeds');
            this.init()


        },
        data() {
            return {
                img:require("../../assets/服务封面.png"),
                serviceName:window.sessionStorage.getItem('servename'),
                serviceID:"1",
                servicePrice:'￥25',
                serviceInfo:'针对生活在自己家，能够生活自理的老年人',
                serviceStruct:'我为高居家服务',
                selectedLabelDefault: '服务详情',
                type:''

            }
        },
        methods: {
            back(){
                this.$router.push('/homepage')
            },
            init(){
                this.serviceName=this.$route.query.mitem.name,
                this.serviceID=this.$route.query.mitem.uid,
                this.servicePrice=this.$route.query.mitem.price,
                this.serviceInfo=this.$route.query.mitem.description,
                this.serviceStruct=this.$route.query.mitem.ins,
                this.type=this.$route.query.mitem.type
            }
        }
    }
</script>

<style lang="stylus" scoped>
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
    .back_btn_create
        position absolute
        top -10px
        left 0px
        font-size 30px
        height 20px
        width 20px
        background-color transparent

</style>