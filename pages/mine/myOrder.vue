<template>
    <div class="nav_bar" style="height: 100%;width: 100%">

        <div class="tab_bar_box">
            <cube-tab-bar class="tab_bar"
                          v-model="selectedLabelDefault"
                          :data="tabs"
                          :showSlider="true"
                          style="font-size: large"
                          @click="clickHandler">
            </cube-tab-bar>
            <cube-button class="back_btn_order" @click="back">返回</cube-button>
        </div>
        <div style="height: 90%">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: "myOrder",
        created(){
          this.clickHandler(this.$route.query.label)
        },
        methods: {
            back(){
                this.$router.push('/mine')
            },
            clickHandler (label) {
                // if you clicked home tab, then print 'Home'
                if (label=="全部订单"){
                    this.$router.push({
                        path:'/AllOrder'
                    })
                }
                if (label=="待支付"){
                    this.$router.push({
                        path:'/WaitForPay'
                    })
                }
                if (label=="我的预约"){
                    this.$router.push({
                        path:'/MyEntertain'
                    })
                }

                console.log(label)
            }
        },
        data () {
            return {
                selectedLabelDefault: this.$route.query.label,
                tabs: [{
                    label: '我的预约'
                }, {
                    label: '待支付'
                },{
                    label: '全部订单'
                }]
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .tab_bar_box
        display inline-flex
        width 100%
    .back_btn_order
        width 20%
        border-radius 15px
        background-color orangered
        color white
        font-size 16px
        margin 3px
    .tab_bar
        width 80%
</style>