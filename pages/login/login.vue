<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像-->

            <!--            登陆表单-->
            <div class="message-box">
                <div type="form-custom" style="background-color: transparent" title="Form 表单">
                    <div slot="content">
                        <cube-form style="background-color: transparent" :model="model">
                            <cube-form-group :v-model="LoginForm">
                                <cube-input v-model="uid"
                                            placeholder="账号"
                                ></cube-input>
                                <cube-input v-model="password"
                                            placeholder="密码"
                                            type='password'
                                            :readonly=false
                                            :clearable=true
                                            :eye="LoginForm.eye"></cube-input>
                            </cube-form-group>
                                <cube-button class="login_btn" @click="login">登录</cube-button>
                            <div class="register_box"
                                 style="background-color: transparent;width: 100%">
                                <cube-button
                                        style="width: 60%; font-size: 15px; background-color: transparent; color: black"
                                        target="_blank" @click="getForget">忘记密码
                                </cube-button>
                                <cube-button
                                        style="width: 40%; margin-left: 30%;font-size: 15px; background-color: transparent;color: black"
                                        target="_blank" @click="getRegister">注册
                                </cube-button>
                            </div>
                        </cube-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                uid: '',
                password: '',

                LoginForm: {
                    eye: {
                        open: false,
                        reverse: false
                    },
                    loginFormRules: {
                        username: [
                            {required: true, message: '请输入登录名称', trigger: 'blur'},
                            {min: 3, max: 15, message: '请输入3到15个字符', trigger: 'blur'}
                        ],
                        password: [
                            {required: true, message: '请输入登录密码', trigger: 'blur'},
                            {min: 3, max: 18, message: '请输入3到18个字符', trigger: 'blur'}
                        ]
                    }
                }
            }
        },
        methods: {
            getInfo(){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+'user/getuser',
                    data:{
                        uid:this.uid
                    }
                }).then(response=>{
                    console.log(response.data)
                    window.localStorage.setItem('userId', this.uid)
                    window.localStorage.setItem('name', response.data.name),
                    window.localStorage.setItem('phone',response.data.phonenubmer)
                })
            },
            submitHandler() {
                console.log('submit');
                this.$router.push({path: '/homepage'})
            },
            login() {
                console.log(this.password);
                console.log(this.uid);
                this.$axios({
                        method: 'post',
                        url: this.$requireIP+'user/login',
                        data:
                            {
                                uid: this.uid,
                                password: this.password,
                            }
                    }
                ).then(
                    response => {
                    console.log(2)
                    if (response.status!== 200) {
                        console.log("失败")
                        this.$message.error('登录失败')
                        return this.$message.error('登录失败！')
                    } else {
                        if(response.data.msg=="登陆成功"){
                            this.$message.success('登录成功')
                            console.log(1)
                            this.getInfo()
                            console.log(response)
                            this.routerIndex()
                        }else {
                            console.log("falsea")
                        }

                    }
                }, a => {
                        console.log(a)
                    })
            },
            getForget() {
                this.$router.push({
                    path: '/forget'
                })
            }
            ,
            routerIndex() {
                this.$router.push({
                    path: '/homepage'
                })
            }
            ,
            getRegister() {
                this.$router.push({
                    path: '/register'
                })
            }

        },
        components: {
            // CubePage,
            // CubeButtonGroup
        }
    }
</script>


<style lang="stylus" scoped>
    .login_container {
        background-color: transparent;
        background-image url("../../assets/登陆界面.jpg")
        background-size 100% 100%
        height: 100%;
    }

    .register_box
        display inline-flex

    .login_box {
        width: 300px;
        height: 100px;
        background-color: transparent;
        border-radius: 15px;
        position absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .login_btn
        width 70%
        margin-left 15%
        margin-top 60px
        margin-bottom 30px
        height 50px
        border-radius 30px
        background-color orangered
        color white
        text-align center
        font-size 25px
        font-family '幼圆'

    .avatar_box {
        width: 100px;
        height: 100px;
        border: 1px solid antiquewhite;
        border-radius: 50%;
        padding: 5px;
        background-color: transparent;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -150%);
    }
    .message-box
        margin-top 30px
        background-color transparent

</style>