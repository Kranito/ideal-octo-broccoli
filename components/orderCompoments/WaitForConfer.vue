<template>
    <el-table
            :data="tableData"
            style="width: 100%;font-size: 18px"
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
                prop="conditions"
                label="状态"
                width="100">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <cube-button
                        @click.native.prevent="confer(scope.$index, tableData)"
                        class="btn"
                        size="small">
                    确认需求
                </cube-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name:"WaitForConfer",
        created(){
          this.init()
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            },
            confer(index,rows){
                console.log(rows[index].id)
                if(rows[index].conditions!=="已转订单"){
                    this.$axios({
                        method:'post',
                        url:this.$requireIP+"transcation/changeneed",
                        params:{
                            uid:rows[index].id
                        }
                    });
                    this.$router.go(0)
                }else{
                    this.$message.error('该需求已转订单！！！')
                }


            },
            init(){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+"transcation/need",
                    data:{
                        name:window.localStorage.getItem('name'),
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
                    conditions:'已转订单'
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