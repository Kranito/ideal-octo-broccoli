<template>
    <div class="comment">
        <div class="userinfo">
            <div style="display: inline-flex">
                <img src="../../assets/icon/002-father-1.png" class="com_avatar" height="23" width="23"/>
                <div style="font-size: 18px">{{mitem.username}}</div>
            </div>
        </div>
        <div class="comment_box">
            {{mitem.comment}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "commentCard",
        props: ["mitem"],
        data() {
            return {

            };
        },
        methods: {}
    }
</script>

<style lang="stylus" scoped>
    .userinfo
        display inline-flex
    .comment
        height 60px
        box-shadow 0 0 1px black
    .comment_box
        font-size 14px
    .com_avatar
        border-radius 50%
        background-color #999999
</style>