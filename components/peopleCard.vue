<template>
    <div class="serve-card" >
        <el-row :gutter="10">
            <el-col :span="24">
                <el-card :body-style="{ padding: '0px' }" shadow="always" @click="open()">
                    <cube-button class="deletebtn"></cube-button>
                    <img src="../assets/icon/041-grandfather.png" class="image">
                    <div class="info_message">
                        <span style="font-size: 20px;color: orangered;font-family: 幼圆;font-weight: bold">{{mitem.name}}</span>
                        <div class="content"><span class="content" style="font-size: 15px">{{mitem.age}}岁</span></div>
                        <span style="font-size: 16px">
                            <img src="../assets/icon/健康.png" height="16" width="16" style="display: block;"/>
                            健康：{{mitem.health}}
                        </span>
                        <span style="font-size: 16px">
                            <img src="../assets/icon/婚姻.png" height="16" width="16" />
                            婚姻：{{mitem.marry}}</span>
                        <span style="font-size: 16px">
                            <img src="../assets/icon/生日.png" height="16" width="16"/>
                            生日：{{mitem.birth}}</span>
                        <span style="font-size: 16px">
                            <img src="../assets/icon/自理能力.png" height="16" width="16"/>
                            自理：{{mitem.life}}</span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "PeopleCard",
        props: ["mitem"], //通过mitem属性接收父组件的传值
        data() {
            return {

            };
        },
        methods:{
            open(){
                console.log(1)
            }

        }
    };
</script>

<style lang="stylus" scoped>

    .image {
         width: 35%;
         float: left;
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
        border-radius: 60px;
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