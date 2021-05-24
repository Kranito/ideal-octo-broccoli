<template>
    <div class="nav_bar">
        <div style="height: 1vh">
            <router-view></router-view>
        </div>
        <div class="tab_bar_box">
            <cube-tab-bar class="tab_bar"
                          v-model="selectedLabelDefault"
                          :data="tabs"
                          :showSlider="false"
                          :useTransition="true"
                          @click="clickHandler">
            </cube-tab-bar>
        </div>

    </div>
</template>

<script>


    import router from "@/router";

    export default {
        name: "SideBar",

        data () {
        return {
            selectedLabelDefault: '首页',
            tabs: [{
                label: '首页',
                icon: 'cubeic-home'
            }, {
                label: '健康',
                icon: 'cubeic-like'
            }, {
                label: '我的',
                icon: 'cubeic-person'
            }]
        }
    },
  methods: {
      clickHandler (label) {
          // if you clicked home tab, then print 'Home'
          if(label=='首页'){
              router.push({
                  path:'/home'
              })
          }
          if(label=='健康'){
              router.push({
                  path:'/health'
              })
          }
          if(label=='我的'){
              router.push({
                  path:'/mine'
              })
          }
          console.log(label)
      }
  }
    }
</script>

<style lang="stylus" scoped>
    .nav_bar
        height 2vh
        background transparent
    .tab_bar_box
        width 100%
        z-index 999
        position fixed
        bottom 0
    .tab_bar
        background-color #f5f5f5
        color white
        font-size 16px
        height 40px
        bottom 0
</style>