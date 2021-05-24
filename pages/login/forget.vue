<template>
    <div class="forget_container">
        <div class="forget_box">
            <cube-form :model="forgetForm" class="forget_form" label-width="0px">
                <p style="font-size: 16px">邮箱</p>
                <cube-form-item prop="email">
                    <cube-input v-model="forgetForm.email" prefix-icon="iconfont icon-youxiang"></cube-input>
                </cube-form-item>
                <p style="font-size: 16px">输入验证码</p>
                <cube-form-item  prop="verificationCode" class="code">
                    <cube-input v-model="forgetForm.verificationCode" prefix-icon="iconfont icon-bianji"></cube-input>
                    <cube-button style="margin-top: 5%;background-color: orangered" type="primary" @click="sendCode">发送验证码</cube-button>
                </cube-form-item>
                <cube-form-item></cube-form-item>
                <cube-form-item class="btn_s">
                    <cube-button type="primary" style="font-size: 20px;background-color: orangered" @click="forget">确定</cube-button>
                </cube-form-item>
            </cube-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forget",
        data () {
            return {
                forgetForm: {
                    email: '',
                    verificationCode: ''
                }
            }
        },
        methods: {
            forget () {
                this.$message.success('请稍等！')
                this.$axios({
                    methods: 'get',
                    url: '/login/forget',
                    params: { email: this.forgetForm.email, captcha: this.forgetForm.verificationCode }
                }).then(response => {
                    if (response.status !== 200) {
                        this.$message.error('发送失败')
                        return this.$message.error('发送失败！')
                    } else {
                        console.log(response.data.success)
                        if (response.data.success === true) {
                            this.$message.success('新的密码已发送至邮箱')
                            this.routerLogin()
                        }
                    }
                })
            },
            sendCode () {
                this.$message.success('请稍等！')
                this.$axios({
                    methods: 'get',
                    url: 'myshopping/public/sendVerifyMailPW',
                    params: { email: this.forgetForm.email }
                }).then(response => {
                    if (response.status !== 200) {
                        this.$message.error('发送失败')
                        return this.$message.error('发送失败！')
                    } else {
                        console.log(response.data.success)
                        this.$message.success('发送成功')
                    }
                })
            },
            routerLogin () {
                this.$router.push({
                    path: '/login'
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .forget_container{
        background-color: white;
        height: 100%;
    }
    .forget_box
        width: 90%;
        height: 50%;
        background-color: white;
        border-radius: 3px;
        position: absolute;
        display: inline
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        .forget_title
            margin-left 10%
            margin-top: 30px;
            font-size: 40px;
            justify-content center


    .forget_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        background-color white
    }
    .btn_s{
        display: flex;
        justify-content: center;
    }
    .code {
    .el-input {
        width: 60%;
        float: left;
        display: inline-block;
    }
    .el-button {
        width: 35%;
        float: left;
        margin-left: 5%;
        margin-top 5%
        display: inline-block;
        font-size: 18px;
    }
    }

</style>