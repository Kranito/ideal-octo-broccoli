<template>
    <div class="background">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="sex">
                <el-input v-model="ruleForm.sex" autocomplete="off"></el-input>
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
        name: "addContact",
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
                    pass: '',
                    sex: '',
                    age: ''
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
        margin-bottom 30px
        margin-top 20%
        padding-bottom 60px
    .background
        position fixed
        top 0
        background-image url("../../assets/背景横.png")
        background-size cover
        height 100%
        width 100%
</style>