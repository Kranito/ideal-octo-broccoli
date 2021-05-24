<template>
    <div class="serve-card" @click="open()" >
        <el-row :gutter="10">
            <el-col :span="24">
                <el-card :body-style="{ padding: '0px' }" shadow="always">
                    <div class="info_message">
                        <span style="height:35px;font-size: 22px;display: inline-flex">
                            <img src="../assets/icon/041-grandfather.png" height="30" width="30"/>
                            <div style="padding-top: 10px">
                                {{mitem.name}}
                            </div>

                        </span>
                        <span style="font-size: 15px;margin-top: 5px;margin-left: 10px;margin-right:10px;background-color: white;border-radius: 15px">
                            <img src="../assets/icon/血压.png" height="20" width="20"/>
                            <div style="padding-top: 4px">
                                血压(mmHg/mmHg):{{mitem.systolic}}/{{mitem.dilational}}
                            </div>
                            </span>
                        <span style="font-size: 15px;margin-top: 5px;margin-left: 10px;margin-right:10px;background-color: white;border-radius: 15px">
                            <img src="../assets/icon/血糖 .png" height="20" width="20"/>
                            <div style="padding-top: 4px">
                                血糖(mmol/L): {{mitem.sugar}}
                            </div>
                            </span>
                        <span style="font-size: 15px;margin-top: 5px;margin-left: 10px;margin-right:10px;background-color: white;border-radius: 15px;margin-bottom: 5px">
                            <img src="../assets/icon/心率.png" height="20" width="20"/>
                            <div style="padding-top: 4px">
                                心率(次/分钟): {{mitem.heart}}
                            </div>
                            </span>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "HealthCard",
        props: ["mitem"], //通过mitem属性接收父组件的传值
        data() {
            return {

            };
        },
        methods:{
            open(){
                this.$router.push({
                    path:'/oldRecord',
                    query:{
                        mitem:this.mitem
                    }
                })
            }
        }
    };
</script>

<style scoped>

    .info_message{
        display: flex;
        flex-direction: column;
        justify-content:flex-start;
        align-content: flex-start;
        background-color:aliceblue;
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
</style>