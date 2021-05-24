<template>
    <div class="background">
        <div class="contact_list">
            <cube-scroll>
                <ul>
                    <div v-for=" (contacter,i) in Mycontacts" :key="i">
                        <contact-card style="margin-top: 10px" :mitem="contacter">
                        </contact-card>
                    </div>
                </ul>
            </cube-scroll>
        </div>
        <div class="add_btn">
            <cube-button class="add" @click="addContact">添 加</cube-button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "myContact",
        created(){
            this.getContact();
        },
        methods:{
            addContact(){
                this.$router.push({
                    path:'/addContact'
                })
            },
            getContact(){
                this.$axios({
                        method: 'post',
                        url: this.$requireIP+'',
                        data:
                            {
                                uid: window.localStorage.getItem('userId')
                            }
                    }
                ).then(
                    response => {
                        console.log(2)
                        if (response.status!== 200) {
                            console.log("失败")
                            this.$message.error('失败')
                            return this.$message.error('失败！')
                        } else {
                            this.$message.success('成功')
                           this.Mycontacts=response.data
                        }
                    }, a => {
                        console.log(a)
                    })
            }
        },
        data(){
            return{
                Mycontacts:[{
                    name:'王凌云',
                    tel:'17858888888'
                },
                    {
                        name:'王小花',
                        tel:'17856666666'
                    }],
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .add_btn
        width 80%
        position fixed
        bottom 10%
        margin-left 10%
    .add
        background-color darkorange
        color white
        border-radius 40px
    .background
        position fixed
        top 0
        background-image url("../../assets/背景横.png")
        background-size cover
        height 100%
        width 100%
    .contact_list
        width 90%
        margin-left 5%
</style>