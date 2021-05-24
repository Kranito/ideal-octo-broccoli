<template>
    <div class="background" style="height: 100%;">
        <div class="slide">
            <cube-slide style="width:100%" :data="items">
            </cube-slide>
        </div>
        <div class="btn_box">
            <cube-button class="back_btn_hk" @click="back"></cube-button>
            <div style="margin-left:160px;margin-top:5px;font-size: 30px"><img src="../../assets/icon/养生.png"
                                                                               height="30" width="30"/>养生知识库</div>

        </div>
        <div class="article_box">
            <cube-tab-bar class="tab_bar"
                          v-model="selectedLabelDefault"
                          :data="tabs"
                          :showSlider="false"
                          :useTransition="true"
                          @click="clickHandler"
                          @change="changeHandler">
            </cube-tab-bar>
            <div class="right-panel">
                <cube-scroll ref="scroll" style="height: 380px;width: 95%;margin-left: 1.5%;padding:1%">
                    <ul>
                        <li style="height: 105px;margin-bottom: 1px;background-color: #fff5ee"
                                v-for="(article, i) in scrollData" :key="i" @click="goartical(article.url)">
                            <div class="artical-card">

                                <span style="font-size: 20px;margin-top:10px;margin-left:20px;width: 70%">{{article.title}}</span>
                                <img :src="article.avatar" width="140" height="100" style="border-radius:10px;position:absolute;right: 0" alt="">
                            </div>

                        </li>
                    </ul>
                </cube-scroll>
            </div>
        </div>
    </div>
</template>

<script>
    import * as DATAS from '../health/articles/DATAS'
    const DATA_MAP = {
        '全部': DATAS.ALL,
        '内科': DATAS.IN,
        '外科': DATAS.OUT,
        '饮食': DATAS.EAT,
        '运动': DATAS.SPORT,
    }
    const genTabLabels = Object.keys(DATA_MAP).map(label => ({
        label
    }))
    export default {
        created () {
            this.scrollData = DATA_MAP[this.selectedLabelDefault]
        },
        name: "healthkeeping",
        methods:{
            goartical(label){
                console.log(1);
                window.location.href = label;
            },
            back(){this.$router.push('/health')},
            changeHandler (label) {
                this.scrollData = DATA_MAP[label]
                this.$nextTick(() => {
                    // reset better-scroll'postion
                    this.$refs.scroll.scrollTo(0, 0)
                    // you need to caculate scroll-content height when your dom has changed in nextTick
                    this.$refs.scroll.refresh()
                })
            }
        },
        data(){
            return{
                items: [
                    {
                        image: require("../../assets/养生轮播图1.jpg")
                    },
                    {
                        image: require("../../assets/养生轮播图2.jpg")
                    }
                ],
                selectedLabelDefault: '内科',
                scrollData: [],
                tabs: genTabLabels
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .slide
        width 100%
        height 160px
        top 0
    .btn_box
        width 98%
        margin-left 1%
        height 50px
        margin-top 20px
        margin-bottom 10px
        display inline-flex
    .back_btn_hk
        width 42px
        height 42px
        background-image url("../../assets/icon/养生返回.png")
        background-size cover
        background-color transparent
        position absolute
        left 10px
    .article_box
        width 98%
        margin-left 1%
    .tab_bar
        height 30px
        font-size 25px
        color #d8fac8
        background-color transparent
    .artical-card
        display inline-flex
    .background
        background-image url("../../assets/养生背景.jpg")
        background-size cover
</style>