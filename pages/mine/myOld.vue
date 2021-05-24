<template>
    <div class="background">
        <div class="old_list">

            <cube-scroll class="listscroll" ref="scroll">
                <ul style="margin-bottom: 60%;width: 90%;margin-left: 5%; border-radius: 50px">
                    <div style="border-radius:50px;margin-top: 10px;box-shadow: 0 0 5px cornsilk" v-for=" (old,i) in olds" :key="i">
                        <people-card style="" :mitem="old">
                        </people-card>
                    </div>
                </ul>
            </cube-scroll>
        </div>
        <div class="add_btn">
            <cube-button class="add" @click="addOld">添加</cube-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myOld",
        created(){
          this.getold()
        },
        data(){
            return{
                olds:[
                    {
                        id:'1',
                        name:'王大狗',
                        img:require('../../assets/icon/041-grandfather.png'),
                        age:'78',
                        health:'无疾病',
                        marry:'已婚',
                        birth:'1968-03-05',
                        life:'完全自理',

                    },
                    {
                        id:'1',
                        name:'王三狗',
                        img:require('../../assets/icon/041-grandfather.png'),
                        age:'65',
                        health:'无疾病',
                        marry:'丧偶',
                        birth:'1968-03-05',
                        life:'不能自理',
                    },{
                        id:'1',
                        name:'王四狗',
                        img:require('../../assets/icon/041-grandfather.png'),
                        age:'78',
                        health:'无疾病',
                        marry:'已婚',
                        birth:'1968-03-05',
                        life:'完全自理',

                    },{
                        id:'1',
                        name:'王六狗',
                        img:require('../../assets/icon/041-grandfather.png'),
                        age:'78',
                        health:'无疾病',
                        marry:'已婚',
                        birth:'1968-03-05',
                        life:'完全自理',

                    },{
                        id:'1',
                        name:'王八狗',
                        img:require('../../assets/icon/041-grandfather.png'),
                        age:'78',
                        health:'无疾病',
                        marry:'已婚',
                        birth:'1968-03-05',
                        life:'完全自理',

                    },
                ]
            }
        },
        methods:{
            getold(){
              this.$axios({
                  method:'post',
                  url:this.$requireIP+'user/old',
                  data:{
                      name:window.localStorage.getItem('name')
                  }
              }).then(response=>{
                  if (response.status!== 200) {
                      console.log("失败")
                  } else {
                      console.log(1)
                      this.olds=response.data
                  }

              })
            },
            addOld(){
                this.$router.push('/addOld')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .add_btn
        width 80%
        position fixed
        bottom 40px
        margin-left 10%
        z-index 600
    .add
        background-color orangered;
        border-radius 30px
        color white
    .old_list
        width 80%
        margin-left 10%
    .background
        position fixed
        top 0
        background-image url("../../assets/背景.png")
        background-size cover
        height 100%
        width 100%
    .listscroll
        height 800px
</style>