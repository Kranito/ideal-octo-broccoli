<template>
    <div class="background">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" style="margin-top: 5%">
                <el-select v-model="ruleForm.name" placeholder="请选择老人"
                           change="addOld"
                           style="width: 150px">
                    <el-option
                            v-for="item in olds"
                            :key="item.value"
                            :label="item.value"
                            :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="血压(收缩压)" style="margin-top: 5%">
                <el-input v-model="ruleForm.systolic"></el-input>
            </el-form-item>
            <el-form-item label="血压(舒张压)">
                <el-input v-model="ruleForm.dilational"></el-input>
            </el-form-item>
            <el-form-item label="血糖" >
                <el-input v-model="ruleForm.sugar"></el-input>
            </el-form-item>
            <el-form-item label="心率" >
                <el-input v-model="ruleForm.heart"></el-input>
            </el-form-item>
            <el-form-item label="测量时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    name:'',
                    systolic:'',
                    dilational:'',
                    sugar:'',
                    heart:'',
                    date1: '',
                    date2: '',
                },
                rules: {
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ]
                },
                olds: [{
                    value: '王大狗',
                }, {
                    value: '王二狗',
                }, {
                    value: '王三狗',
                }, ],
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        this.$axios({
                            method:'post',
                            url:this.$requireIP+'user/addhealth',
                            data:{
                                name:this.ruleForm.name,
                                systolic:this.ruleForm.systolic,
                                dilational:this.ruleForm.dilational,
                                sugar:this.ruleForm.sugar,
                                heart:this.ruleForm.heart,
                                date1: this.ruleForm.date1,
                                date2: this.ruleForm.date2,
                            }
                        }).then(
                            this.$router.go(-1)
                        )
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .demo-ruleForm
        width 90%
        height 100%
        margin-top 90px
    .background
        position fixed
        top 0
        background-image url("../../assets/背景横.png")
        background-size cover
        height 100%



</style>