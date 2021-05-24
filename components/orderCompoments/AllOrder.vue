<template>
    <el-table
            :data="tableData"
            style="width: 100%;font-size: 18px"
            >
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="姓名">
                        <span>{{ props.row.oldname }}</span>
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <span>{{ props.row.jigou }}</span>
                    </el-form-item>
                    <el-form-item label="服务名">
                        <span>{{ props.row.item }}</span>
                    </el-form-item>
                    <el-form-item label="价格">
                        <span>{{ props.row.price }}</span>
                    </el-form-item>
                    <el-form-item label="地址">
                        <span>{{ props.row.address }}</span>
                    </el-form-item>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                prop="id"
                label="订单号"
                width="100">
        </el-table-column>
        <el-table-column
                prop="item"
                label="服务名"
                width="100">
        </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button
                        class="btn"
                        @click.native.prevent="createComment(scope.$index, tableData)"
                        type="text"
                        size="medium">
                    评价
                </el-button>
                <el-button
                        class="btn"
                        @click.native.prevent="createComment(scope.$index, tableData)"
                        type="text"
                        size="medium">
                    投诉
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name:"AllOrder",
        created(){
            console.log(window.localStorage.getItem('userId'))
            this.$axios({
                method: 'post',
                url:this.$requireIP+"transcation/allorder",
                data: {
                    userid:window.localStorage.getItem('userId')
                }
            }).then( response=>{
                console.log(response);
                this.tableData=response.data
            })
        },
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
                console.log(index)
            },
            createComment(index,rows){
                console.log(index,rows[index].id);
                this.$router.push({
                    path:'/createComment',
                    query:{
                        user:window.localStorage.getItem('userId'),
                        ordernumber:rows[index].id
                    }
                })
            }
        },
        data() {
            return {
                tableData: [{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '78',
                    item: '居家社区',
                    shop:'为高聚集养老',
                    address: '上海市普陀区金沙江路 1518 弄',
                },{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '78',
                    item: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                },{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '78',
                    item: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                },{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '78',
                    item: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                },{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '78',
                    item: '居家社区',
                    address: '上海市普陀区金沙江路 1518 弄',
                },{
                    id: '2016-05-03',
                    name: '王小虎',
                    price: '78',
                    item: '居家社区',
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
    .demo-table-expand
        font-size: 0;

    .demo-table-expand
        .label
            width: 100px;
            color: #99a9bf;
        .el-form-item
            right: 0;
            margin-bottom: 0;
            width: 80%;

</style>