<template>
    <div class="background" >
        <div style="margin-top: 10%;margin-left:10%;width: 80%">
            <div>
                <p style="font-size: 18px;width: 30%;height: 50px">手机号</p>
                <cube-button class="bt1" @click="showPrompt">{{this.UserInfo.Telephone}}</cube-button>
            </div>
            <div>
                <p style="font-size: 18px;width: 30%;height: 50px">昵称</p>
                <cube-button class="bt2" @click="changeName">{{this.UserInfo.Username}}</cube-button>
            </div>
            <div>
                <cube-button class="bt4" @click="Save">保存</cube-button>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "myInformation",
        methods:{
            Save(){
                this.$axios(
                    {
                        methods: 'get',
                        url: '',
                        params: this.UserInfo
                    }).then(response => {
                    if (response.status !== 200) {
                        this.$message.error('失败')
                        return this.$message.error('失败！')
                    } else {
                        console.log(response.data.success)
                        if (response.data.success === true) {
                            this.$message.success('保存成功')
                        }
                    }
                })
            },
            showPrompt(){
                this.dialog = this.$createDialog({
                    type: 'prompt',
                    title: '手机号',
                    prompt: {
                        value: '',
                        placeholder: '请输入'
                    },
                    onConfirm: (e, promptValue) => {
                        this.$createToast({
                            type: 'warn',
                            time: 1000,
                            txt: `Prompt value: ${promptValue || ''}`
                        }).show(),
                            this.UserInfo.Telephone=promptValue
                    }
                }).show()

            },
            changeName(){
                this.dialog = this.$createDialog({
                    type: 'prompt',
                    title: '昵称',
                    prompt: {
                        value: '',
                        placeholder: '请输入'
                    },
                    onConfirm: (e, promptValue) => {
                        this.$createToast({
                            type: 'warn',
                            time: 1000,
                            txt: `Prompt value: ${promptValue || ''}`
                        }).show(),
                            this.UserInfo.Username=promptValue
                    }
                }).show()
            },
            selectHandle(selectedVal, selectedIndex, selectedText) {
                this.$createDialog({
                    type: 'warn',
                    content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
                    icon: 'cubeic-alert'
                }).show(),
                    this.UserInfo.Sex=selectedText.join(' ')
            },
            cancelHandle() {
                this.$createToast({
                    type: 'correct',
                    txt: 'Picker canceled',
                    time: 1000
                }).show()
            }
        },
        data(){
            return{
                column1:[{text:"男",value:"male"},
                        {text:"女",value:"female"}],
                UserInfo:{
                    Telephone:window.localStorage.getItem('phone'),
                    Username:window.localStorage.getItem('name'),
                }

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .background
        position fixed
        top 0
        background-image url("../../assets/背景横.png")
        background-size cover
        height 100%
        width 100%
    .bt1
        margin-bottom  15%
        background white
        box-shadow 0 0 3px #999999
        color #909399
        border-radius 30px
    .bt2
        margin-bottom 15%
        background white
        box-shadow 0 0 3px #999999
        color #909399
        border-radius 30px
    .bt3
        margin-bottom 15%
        background transparent
        box-shadow 0 0 3px #999999
        color #909399
        border-radius 30px
    .bt4
        margin-bottom 25%
        background orangered
        box-shadow 0 0 3px #999999
        color white
        font-size 20px
        border-radius 30px
</style>