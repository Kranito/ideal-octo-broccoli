<template>
    <cube-page>
        <div class="btn_box">
            <cube-button class="btn">修改密码</cube-button>
            <cube-button class="btn" @click="userExit">安全退出</cube-button>
        </div>
    </cube-page>
</template>

<script>
    export default {
        name: "myOption",
        methods:{
            userExit(){
                    window.localStorage.clear(),
                    this.$router.push('/login')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .btn_box
        margin-top 10%
    .btn
        margin-top 10%
        color white
        background-color orangered
        height 50px
        font-size 20px
        width 80%
        border-radius 20px
        margin-left 10%

</style>