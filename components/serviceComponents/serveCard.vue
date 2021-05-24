<template>
    <div class="serve-card" @click="open()" >
        <el-row :gutter="10">
            <el-col :span="24">
                <el-card :body-style="{ padding: '0px' }" shadow="always">
                    <img src="../../assets/服务封面.png" class="image">
                    <div class="info_message">
                        <span style="font-size: 18px">{{mitem.name}}</span>
                        <div class="content"><span style="font-size: 14px">{{mitem.description}}</span></div>
                        <div class="content"><span style="font-size: 12px">{{mitem.target}}</span></div>
                        <el-rate class="bottom" v-model="mitem.score" disabled text-color="#ff9900" score-template="{value}"></el-rate>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "ServeCard",
        props: ["mitem"], //通过mitem属性接收父组件的传值
        data() {
            return {
                value:3.5
            };
        },
        methods:{
            open(){
                window.sessionStorage.setItem('servename',this.mitem.name)
               this.$router.push({path:"/service",
                   query:{
                        mitem: this.mitem
                   }});

            }
        }
    };
</script>

<style scoped>

    .time {
        font-size: 13px;
        color: #999;
    }
    .bottom {
        margin-bottom: 15px;
        line-height: 12px;
    }
    .button {
        padding: 0;
        float: right;
    }
    .image {
        width: 35%;
        float: left;
        border-radius: 20%;
        padding: 5px;
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
        font-size: 12px;
        height: 35px;
    }
</style>