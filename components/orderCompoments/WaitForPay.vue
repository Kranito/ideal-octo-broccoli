<template>
    <el-table
            :data="tableData"
            style="width: 100%;height: 80%;font-size: 18px"
            max-height="2500">
        <el-table-column
                prop="id"
                label="订单号"
                width="100">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="100">
        </el-table-column>
        <el-table-column
                prop="item"
                label="服务名"
                width="100">
        </el-table-column>
        <el-table-column
                prop="price"
                label="价格"
                width="100">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址"
                width="300">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button
                        @click.native.prevent="pay(scope.$index, tableData)"
                        type="text"
                        class="btn"
                        size="small">
                    支付
                </el-button>
                <el-button
                        @click.native.prevent="pay(scope.$index, tableData)"
                        type="text"
                        class="btn"
                        size="small">
                    取消
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name:"WaitForPay",
        created(){
            this.init()
        },
        methods: {
            pay(index,rows){
                console.log(typeof (rows[index].id));
                this.$axios({
                    method:'post',
                    url:this.$requireIP+'transcation/changeorder',
                    data:{
                        conditions:'已支付',
                        uid:rows[index].id,
                    }
                });
                this.$router.go(0);
            },
            init(){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+"transcation/order",
                    data:{
                        userid:window.localStorage.getItem('userId'),
                        conditions:'待支付'
                    }
                }).then(
                    response=>{
                        this.tableData=response.data
                    }
                );

            }
        },
        data() {
            return {
                tableData: [{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                },{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '上海',
                    service: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                },]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .btn
        width 100%
        background-color white
        padding 3px
        border-color gray
        height 30px
        margin-top 5px
        margin-bottom 5px
        color black
        font-size small
</style>