<template>
    <div class="serve-card" @click="open()" >
        <el-row :gutter="10">
            <el-col :span="24">
                <el-card :body-style="{ padding: '0px' }" shadow="always" style="background-color: #fff0f5">
                    <cube-button class="deletebtn"></cube-button>
                    <img src="../assets/icon/050-father.png" class="image">
                    <div class="info_message">
                        <span style="font-size: 22px;font-family: 幼圆">{{mitem.name}}</span>
                        <span style="font-size: 18px;margin-bottom: 9px">联系方式：<br/><br/>{{mitem.tel}}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "ContactCard",
        props: ["mitem"], //通过mitem属性接收父组件的传值
        data() {
            return {

            };
        },
        methods:{
            open(){
            }
        }
    };
</script>

<style scoped>

    .image {
        width: 35%;
        float: left;
        background-color: white;
    }
    .info_message{
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-content: flex-start;
    }
    .info_message span{
        display: flex;
        line-height: 12px;
        padding: 10px;
    }
    .content{
        color: #909399;
        font-size: 15px;
    }
    .serve-card{
        border-radius: 30px;
        background-color: bisque;
    }
    .image{
        width: 90px;
        height: 90px;
        margin-top: 5px;
        margin-left: 15px;
        margin-right: 25px;
        border-radius: 25px;
        box-shadow: 0 0 3px gray;
    }
    .deletebtn{
        height: 15px;
        width: 15px;
        position: absolute;
        top: 2px;
        right: 6px;
        background-image: url("../assets/icon/删除.png");
        background-size: cover;
        background-color: transparent;

    }
</style>