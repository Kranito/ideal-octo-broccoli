<template>
    <div class="page">
        <div class="user_box" style="" >
            <div class="avatar_box">
                <img src="../assets/icon/026-home.png" alt="">
            </div>
            <div class="inf_box" style="margin-left: 10%;margin-top: 6%">
                <div style="margin-top: 13%;font-size: 30px;color: white">{{Username}}</div>
                <div style="margin-top: 19%;font-size: 18px;color: white">{{Tel}}</div>
            </div>
        </div>
        <div>
            <div class="my_order">
                    <cube-button class="entertainment" :light="true" @click="ClickHandler('我的预约')">
                        <img src="../assets/icon/确认.png" height="50" width="50"/><br/>我的预约</cube-button>
                    <cube-button class="wait_payment" :light="true" @click="ClickHandler('待支付')">
                        <img src="../assets/icon/支付.png" height="50" width="50"/><br/>待支付</cube-button>
                    <cube-button class="all_order" :light="true" @click="ClickHandler('全部订单')">
                        <img src="../assets/icon/全部订单.png" height="50" width="50"/><br/>全部订单</cube-button>



            </div>
            <div class="my_activity">
                <cube-button class="my_opt" :light="true" @click="ClickJump('/myInformation')">
                    <img src="../assets/icon/007-house-1.png" class="btn_icon">
                    <div style="padding-top: 3px">
                        个人信息
                    </div><img src="../assets/icon/前进.png" class="go_icon"/>
                    </cube-button>
                <cube-button class="my_opt" :light="true" @click="ClickJump('/myOld')">
                    <img src="../assets/icon/041-grandfather.png" class="btn_icon">
                    <div style="padding-top: 3px">
                        绑定老人
                    </div><img src="../assets/icon/前进.png" class="go_icon"/></cube-button>
                <cube-button class="my_opt" :light="true" @click="ClickJump('/myContact')">
                    <img src="../assets/icon/002-father-1.png" class="btn_icon">
                    <div style="padding-top: 3px">
                        联 系 人
                    </div>
                    <img src="../assets/icon/前进.png" class="go_icon"/></cube-button>
                <cube-button class="my_opt" :light="true" @click="ClickJump('/myMess')">
                    <img src="../assets/icon/开心星星.png" class="btn_icon">
                    <div style="padding-top: 3px">
                        意见反馈
                    </div><img src="../assets/icon/前进.png" class="go_icon"/></cube-button>
                <cube-button class="my_opt" :light="true" @click="ClickJump('/myOption')">
                    <img src="../assets/icon/电灯泡.png" class="btn_icon">
                    <div style="padding-top: 3px">
                        设 置
                    </div><img src="../assets/icon/前进.png" class="go_icon"/></cube-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        created(){
            this.getInfo();
            this.getOrderNum()
        },
        data(){
            return{
                Username:"未登录",
                Tel:"未登录",
                orderNum:{
                    ent:1,
                    pay:2,
                    con:3,
                    all:''
                }
            }
        },
        methods:{
            ClickHandler(label) {
                console.log(label);
                this.$router.push({
                    path:'/myOrder',
                    query:{
                        label:label
                    }
                });
            },
            getOrderNum(){
                this.$axios({
                    method:'post',
                    url:'',
                    data:{
                        uid:window.localStorage.getItem('userId')
                    }
                }).then(response=>{
                    this.orderNum=response.data
                })
            },
            ClickJump(label) {
                this.$router.push(label)
            },
            getInfo(){
                if(window.localStorage.getItem('userId')){
                    this.Username=window.localStorage.getItem('userId')
                }
                if(window.localStorage.getItem('phone')){
                    this.Tel=window.localStorage.getItem('phone')
                }
                if(window.localStorage.getItem('name')){
                    this.Username=window.localStorage.getItem('name')
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .user_box
        width 96%
        margin-top 5%
        margin-left 2%
        background-color orangered
        border-radius 15px
        display inline-flex
        background-size auto
        background-position center
        background-image url('../assets/山.png')
    .btn_icon
        width 25px
        height 25px
        display block;
        margin-left 7px;
        margin-right 20px;
    .go_icon
        width 25px
        height 25px
        position absolute
        right 20px
    .item
        margin-top 0px
        width 33%
        height 100%
        margin-right 0%
    .page
        background-color #f5f5f5
        background-size cover
        height 800px
    .avatar_box
        width 100px
        height 100px
        /*position fixed*/
        margin-left 10%
        margin-bottom 6%
        margin-top 6%
        display inline-flex
        border 1px solid antiquewhite;
        border-radius 50%;
        padding 5px;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        box-shadow 0 0 10px gray;
        background-color white;
    .my_opt
        margin-top 1px
        /*box-shadow 0 0 10px gray;*/
        width 95%
        height 55px
        margin-left 2.5%
        border-radius 0px
        font-size 20px
        display flex
        padding-right 25%
        color #696969
        font-family '幼圆'
    .my_order
        display inline-flex
        width 95%
        margin-top 7%
        margin-bottom 20px
        margin-left 2.5%
        height 90px
        border-radius 5px
        background-color white

    .entertainment
        margin-bottom 0%
        margin-top 0%
        font-size 14px
        font-weight bold
        color #696969
        height 100%
        font-family '微软雅黑 Light'
        /*box-shadow 0 0 10px gray;*/
        margin-right 0%
        border-radius 0px

    .wait_confer
        margin-bottom 0%
        /*box-shadow 0 0 10px gray;*/
        margin-top 0%
        margin-right 0%
        font-size 14px
        font-family '微软雅黑 Light'
        border-radius 0px
    .wait_payment
        margin-bottom 0%
        margin-top 0%
        font-size 14px
        font-weight bold
        font-family '微软雅黑 Light'
        /*box-shadow 0 0 10px gray;*/
        margin-right 0%
        height 100%
        border-radius 0px
    .all_order
        margin-bottom 0%
        /*box-shadow 0 0 10px gray;*/
        margin-top 0%
        margin-right 0%
        height 100%
        font-size 14px
        font-weight bold
        font-family '幼圆'
        border-radius 0px
        background-color white
        color #696969
    .my_activity
        text-align center
        border-radius 20px
        margin-bottom 90px


</style>