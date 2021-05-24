<template>
    <div class="background">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-input v-model="ruleForm.sex" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input v-model.number="ruleForm.age"></el-input>
            </el-form-item>
            <el-form-item label="自理能力">
                <el-select v-model="ruleForm.life" placeholder="请选择">
                    <el-option label="完全自理" value="完全自理"></el-option>
                    <el-option label="半自理" value="半自理"></el-option>
                    <el-option label="不能自理" value="不能自理"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="婚姻状况">
                <el-select v-model="ruleForm.marry" placeholder="请选择">
                    <el-option label="已婚" value="已婚"></el-option>
                    <el-option label="离异" value="离异"></el-option>
                    <el-option label="丧偶" value="丧偶"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="疾病史">
                <el-select v-model="ruleForm.health" placeholder="请选择">
                    <el-option label="心脏病" value="心脏病"></el-option>
                    <el-option label="高血压" value="高血压"></el-option>
                    <el-option label="传染病" value="传染病"></el-option>
                    <el-option label="其他类型" value="其他类型"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="ruleForm.idcard"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="ruleForm.phonenumber"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        data() {
            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 40) {
                            callback(new Error('必须年满40岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var checkSex = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('不能为空'));
                }
                setTimeout(() => {
                    if (value!='男'&&value!='女') {
                        callback(new Error('请输入男或女'));
                    } else {

                            callback();

                    }
                }, 1000);
            };
            return {
                ruleForm: {
                    name: '',
                    sex: '',
                    age: '',
                    life:'',
                    contacter:'',
                    phone:'',
                    phonenumber:'',
                    health:'',
                    idcard:'',
                    marry:''
                },
                rules: {
                    pass: [
                        { trigger: 'blur' }
                    ],
                    sex: [
                        { validator: checkSex, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                        this.$axios({
                            method:'post',
                            url:this.$requireIP+'user/addold',
                            data:{
                                name: this.ruleForm.name,
                                sex: this.ruleForm.sex,
                                age: this.ruleForm.age,
                                life:this.ruleForm.life,
                                contacter:window.localStorage.getItem('name'),
                                phone:window.localStorage.getItem('phone'),
                                phonenumber:this.ruleForm.phonenumber,
                                health:this.ruleForm.health,
                                idcard:this.ruleForm.idcard,
                                marry:this.ruleForm.marry,
                                birth:"1978-05-17"
                            }
                        }).then(
                            console.log(1),
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
        margin-top 10%
        width 85%
    .background
        position fixed
        top 0
        background-image url("../../assets/背景横.png")
        background-size cover
        height 100%
        width 100%
</style>