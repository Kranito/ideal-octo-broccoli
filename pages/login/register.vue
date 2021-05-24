<template>
    <div class="register_container">
        <div class="register_box">
            <cube-form :model="registerForm" class="register_form" :rules="registerFormRules" label-width="0px">
                <p style="font-size: 16px">用户名</p>
                <cube-form-item prop="name">
                    <cube-input v-model="registerForm.name" prefix-icon="iconfont icon-user"></cube-input>
                </cube-form-item>
                <p style="font-size: 16px">手机号</p>
                <cube-form-item prop="phonenubmer">
                    <cube-input v-model="registerForm.phonenubmer" prefix-icon="iconfont icon-youxiang"></cube-input>
                </cube-form-item>
                <p style="font-size: 16px">注册账号</p>
                <cube-form-item  prop="verificationCode" class="code">
                    <cube-input v-model="registerForm.uid" prefix-icon="iconfont icon-bianji"></cube-input>
<!--                    <cube-button type="primary" @click="sendVerifyMail">发送验证码</cube-button>-->
                </cube-form-item>
                <p style="font-size: 16px">密码</p>
                <cube-form-item prop="password">
                    <cube-input type="password" v-model="registerForm.password" prefix-icon="iconfont icon-mima"></cube-input>
                </cube-form-item>
                <p style="font-size: 16px">确认密码</p>
                <cube-form-item prop="confirmPassword">
                    <cube-input type="password" v-model="registerForm.confirmPassword" prefix-icon="iconfont icon-mima"></cube-input>
                </cube-form-item>
                <cube-form-item class="btn_s">
                    <cube-button type="primary" style="font-size: 18px;border-radius: 10px;background-color: orangered" @click="register">注册</cube-button>
                </cube-form-item>
            </cube-form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'))
                } else {
                    if (this.registerForm.confirmPassword !== '') {
                        this.$refs.ruleForm.validateField('confirmPassword')
                    }
                    callback()
                }
            }
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'))
                } else {
                    callback()
                }
            }
            return {
                registerForm: {
                    name: '',
                    phonenubmer: '',
                    password: '',
                    confirmPassword: '',
                    verificationCode: ''
                },
                registerFormRules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 6, max: 15, message: '请输入6到15个字符', trigger: 'blur' }
                    ],
                    password: [
                        { min: 8, max: 18, message: '请输入8到18个字符', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    confirmPassword: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    verificationCode: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { min: 6, max: 6, message: '请输入6位验证码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            sendVerifyMail () {
                this.$message.success('请稍等！')
                this.$axios({
                    methods: 'get',
                    url: 'myshopping/public/sendVerifyMail',
                    params: { email: this.registerForm.email }
                }).then(response => {
                    if (response.status !== 200) {
                        console.log(response.data.success)
                        this.$message.error('获取验证码失败！')
                        return this.$message.error('获取验证码失败！')
                    } else {
                        this.$message.success(response.data.message)
                        console.log(response.data.success)
                    }
                })
            },
            register () {
                this.$message.success('请稍等！')
                this.$axios({
                    method: 'post',
                    url: this.$requireIP+'user/register',
                    data:{
                        name: this.registerForm.name,
                        phonenubmer:this.registerForm.phonenubmer,
                        uid:this.registerForm.uid,
                        password:this.registerForm.password
                    }
                }).then(response => {
                    if (response.status !== 200) {
                        this.$message.error('注册失败！')
                        return this.$message.error('注册失败！')
                    } else {
                        this.$message.success('注册成功！')
                        this.routerLogin()
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
    .register_container{
        background-color: white
        height: 100%;
    }

    .register_box{
        width: 90%;
        height: 60%;
        background-color: white;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .register_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
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
            display: inline-block;
            font-size: 18px;
        }
    }
    .register_title {
        text-align: center;
        height 40px
        font-size: 30px;
        margin-bottom 20px
    }
</style>
