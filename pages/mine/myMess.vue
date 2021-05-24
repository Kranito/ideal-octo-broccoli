
<template>
    <div class="background_mess">
        <div type="recycle-list" title="RecycleList">
            <cube-textarea v-model="content" maxlength=300
                           placeholder="请在此输入您的意见"
                           autoExpand=true
                           class="input_box">
            </cube-textarea>

            <br/>
            <cube-button class="submit">提交</cube-button>
        </div>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                content:'',
                initTime: new Date().getTime(),
                id: 0,
                size: 50,
                offset: 100
            }
        },
        components: {
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .input_box
        width 90%
        border-radius 40px
        margin-left 5%
        margin-top 10%
        margin-bottom 10%
    .submit
        background-color darkorange
        border-radius 30px
    .background_mess
        position fixed
        top 0
        background-image url("../../assets/背景横.png")
        background-size cover
        height 100%
        width 100%
</style>