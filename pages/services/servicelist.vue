<template>
    <div>
        <div>
            <div class="select">
                <cube-select class="area"
                             v-model="m1.value"
                             :options="m1.options">区域</cube-select>
                <cube-select class="serve_type"
                             v-model="m2.value"
                             :options="m2.options">服务</cube-select>
                <cube-select class="order_type"
                             v-model="m3.value"
                             :options="m3.options">>排序方式</cube-select>
                <cube-button :light="true" @click="selectService"
                             style="width:25%;margin-left: 2%;margin-right: 2%;color: black;background-color: orangered">
                查询</cube-button>
            </div>
        </div>

        <div class="services_list" style="height:80%;">
            <cube-scroll ref="scroll">
                <ul style="margin-bottom: 60%">
                    <div style="margin-top: 10px;box-shadow: 0 0 5px gray" v-for=" (services,i) in Services" :key="i">
                        <serve-card  :mitem="services">
                        </serve-card>
                    </div>
                </ul>
            </cube-scroll>
        </div>
    </div>
</template>

<script>

    export default {
        name: "servicelist",
        components: {},
        created(){
            this.selectService();
            console.log(this.Services)
        },
        methods:{
        selectService(){
            //获取服务列表
            this.$axios({
                method: 'post',
                url: this.$requireIP+'item/show',
                data: {
                    type:this.$route.query.type
                     }
            }).then(response => {
                if (response.status !== 200) {
                    return this.$message.error('获取服务列表失败！')
                }
                console.log('获取服务列表成功! ')
                // console.log(response.data)
                this.Services = response.data
            })
        }
        },
        data() {
            return{
                Services:[],
                m1:{
                    options: ["全部","环翠区", "威海市", "文登区", "荣成市", "乳山市"],
                    value: "全部"
                },
                m2:{
                    options: ["全部",2013, 2014, 2015, 2016, 2017, 2018],
                    value: "全部"
                },
                m3:{
                    options: ["价格排序", "距离最近"],
                    value: "价格排序"
                },
                queryInfo:{
                    // area:this.m1.value,
                    // time:this.m2.value,
                    // order:this.m3.value
                },
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .select
        display inline-flex
        position fixed
        margin-top 3%
        width 100%
        height 5%
        z-index 99
        .area
            width 33.3%
            text-size 100%
        .order_type
            width 33.3%
        .serve_type
            width 33.4%
    .services_list
        top 8%
        width 100%
        position fixed
        box-shadow 0 0 5px black

</style>