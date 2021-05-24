<template>
    <div class="background" style="height: 100%;background-color: aliceblue">
        <div style="font-size: 26px;margin-left: 30px;margin-bottom: 3px"><img src="../../assets/icon/药.png" height="25" width="25"/>
            药物清单</div>
        <cube-button  class="back_btn" @click="back"></cube-button>
       <div style="height: 360px">
           <el-table
                   :data="tableData"
                   style="width: 95%;margin-left:2.5%;font-size: 18px"
                   :row-class-name="tableRowClassName"
                   max-height="350px">
               <el-table-column
                       prop="medicinename"
                       label="药物名"
                       width="100">
               </el-table-column>
               <el-table-column
                       prop="time"
                       label="时间段"
                       width="80">
               </el-table-column>
               <el-table-column
                       prop="amount"
                       label="数量"
                       width="60">
               </el-table-column>
               <el-table-column
                       prop="status"
                       label="状态"
                       width="100">
               </el-table-column>
               <el-table-column
                       fixed="right"
                       label="操作"
                       width="80">
                   <template slot-scope="scope">
                       <el-button
                               class="btn"
                               @click.native.prevent="confer(scope.$index, tableData)"
                               type="text"
                               size="medium"
                                :disabled="getstatus(scope.$index, tableData)">
                           确认服用
                       </el-button>
                   </template>
               </el-table-column>
           </el-table>
       </div>
        <div>
            <p style="font-size: 22px">添加药品</p>
            <el-form class="medicine_form" ref="form">
                <el-form-item label="药品名及数量">
                    <el-col :span="9"><el-input v-model="addmedicinename" placeholder="药品名" style="width: 60%;"></el-input></el-col>
                    <el-col :span="8"><el-input v-model="addmedicineamount" placeholder="数量" style="width: 60%;"></el-input></el-col>

                </el-form-item>
                <el-form-item label="时间"  required>
                    <el-col :span="9">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="开始日期" v-model="date_start" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class="line" :span="1">-</el-col>
                    <el-col :span="9">
                        <el-form-item prop="date2">
                            <el-date-picker placeholder="结束日期" v-model="date_end" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label="时间段">
                    <el-checkbox-group v-model="checkList" style="height: 30px">
                        <el-checkbox label="早上"></el-checkbox>
                        <el-checkbox label="中午"></el-checkbox>
                        <el-checkbox label="晚上"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>

            <cube-button class="confer_btn" @click="addmedicine">确认添加</cube-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "medicine",
        data(){
            return{
                date_start:'',
                date_end:'',
                addmedicinename:'',
                addmedicineamount:'',
                checkList:[],
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() < Date.now();
                    },
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '明天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() + 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    },{
                        text: '两周',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() + 3600 * 1000 * 24 * 14);
                            picker.$emit('pick', date);
                        },
                    },{
                        text: '30天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() + 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', date);
                        },
                    }]
                },
                tableData:[{
                    id:'1',
                    medicinename:'阿莫西林',
                    time:"早上",
                    amount:'3粒',
                    status:"已服用"
                }, {
                    id:'2',
                    medicinename:'阿莫西林',
                    time:"中午",
                    amount:'3粒',
                    status:"未服用"
                }, {
                    id:'3',
                    medicinename:'阿莫西林',
                    time:"晚上",
                    amount:'3粒',
                    status:"已服用"
                },{
                    id:'4',
                    medicinename:'氟氯它希汀',
                    time:"早上",
                    amount:'3粒',
                    status:"已服用"
                }, {
                    id:'5',
                    medicinename:'氟氯它希汀',
                    time:"中午",
                    amount:'3粒',
                    status:"未服用"
                }, {
                    id:'6',
                    medicinename:'氟氯它希汀',
                    time:"晚上",
                    amount:'3粒',
                    status:"未服用"
                }]

            }
        },
        created(){
            this.getmedicine()
        },
        methods:{
            tableRowClassName({row, rowIndex}) {
                 console.log(rowIndex);
                if (row.status === "未服用") {
                    return 'warning-row';
                } else{
                    return 'success-row';
                }
            },
            getmedicine(){
                this.$axios({
                    method:'post',
                    url:'',
                    data:{
                        id:window.localStorage.getItem('userId')
                    }
                }).then(response=>{
                    this.tableData=response.data
                })
            },
            back(){this.$router.push('/health')},
            getstatus(index, rows){
                if(rows[index].status === "已服用"){
                    return true;
                }else {
                    return false;
                }
            },
            addmedicine(){
                for(var i =0;i<this.checkList.length;i++) {
                    if (this.checkList[i]) {
                        this.$axios({
                            method:'post',
                            url:'',
                            data:{
                                medicinename:this.medicinename,
                                medicineamount:this.medicineamount,
                                datestart:this.datestart,
                                dateend:this.dateend,
                                time:this.checkList[i]
                            }
                        })
                    }
                }
                console.log('上传成功')
                this.getmedicine()

            },
            confer(index, rows){
                console.log(rows[index].id);
                this.$axios(
                    {
                        method:'post',
                        url:'',
                        data:{
                            id:rows[index].id
                        }
                    }
                )
                rows[index].status = "已服用"
            }
        }
    }
</script>

<style lang="stylus">
    .el-table .warning-row {
        background: #ffb6c1;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }
    .timeselect
        width: 40%
    .back_btn
        width 42px
        height 42px
        background-image url("../../assets/icon/养生返回.png")
        background-size cover
        background-color transparent
        position absolute
        right  10px
        top 0px
        z-index 999
    .background
        background-image url("../../assets/药背景.png")
        background-size 100% 100%
    .confer_btn
        width 60%
        height 40px
        margin-left 20%
        border-radius 10px 0 10px 0
        text-align center
        background-color deepskyblue
    .medicine_form
        background-color rgba(255,255,255,0.7)
        width 90%
        border-radius 15px
        padding 5px
        margin-left 5%

</style>