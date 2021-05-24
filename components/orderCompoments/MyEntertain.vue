<template>
    <el-table
            :data="tableData"
            style="width: 100%;font-size: 18px"
            max-height="2500px">
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
                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                        size="small">
                    移除
                </el-button>
                <cube-button
                        class="btn"
                        @click.native.prevent="confer(scope.$index, tableData)"
                        size="medium">
                    确认预约
                </cube-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name:"MyEntertain",
        created(){
          this.init()
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            confer(index,rows){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+"transcation/changeorder",
                    data:{
                        uid:rows[index].id,
                        conditions:'待支付'
                    }
                });
                this.$router.go(0)
            },
            init(){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+"transcation/order",
                    data:{
                        name:window.localStorage.getItem('name'),
                        conditions:'未确认'
                    }
                }).then(
                    response=>{
                        this.tableData=response.data
                    }
                )
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
        background-color #d6dcd4
        padding 3px
        border-color gray
        height 30px
        margin-top 5px
        margin-bottom 5px
        color black
        font-size small
</style>