<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="老人姓名">
                <el-input v-model="form.name"></el-input>
                <div style="display:inline-flex">
                    <cube-button class="addoldbtn"></cube-button>
                    <p>从老人列表添加</p>
                </div>
            </el-form-item>
            <el-form-item label="老人年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="自理能力">
                <el-select v-model="form.selfcare" placeholder="请选择">
                    <el-option label="完全自理" value="1"></el-option>
                    <el-option label="半自理" value="2"></el-option>
                    <el-option label="不能自理" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="疾病史">
                <el-select v-model="form.selfcare" placeholder="请选择">
                    <el-option label="心脏病" value="1"></el-option>
                    <el-option label="高血压" value="2"></el-option>
                    <el-option label="传染病" value="3"></el-option>
                    <el-option label="其他类型" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="备注">
                <el-input v-model="form.others"></el-input>
            </el-form-item>

            <el-form-item label="联系人">
                <el-input v-model="form.contact"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input v-model="form.contactTel"></el-input>
            </el-form-item>
            <el-form-item label="时间" required>
                <el-col :span="11">
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-form-item prop="date2">
                        <el-date-picker placeholder="选择结束日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            <el-form-item>
                <cube-button class="primary" @click="onSubmit">立即创建</cube-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "order",
        created(){
            this.serviceName=window.sessionStorage.getItem('servename'),
                this.servicePrice=this.$route.query.mitem.price,
                this.serviceInfo=this.$route.query.mitem.description,
                this.serviceStruct=this.$route.query.mitem.ins
        },
        data() {
            return {
                img:require("../../assets/logo.png"),
                serviceName:window.sessionStorage.getItem('servename'),
                servicePrice:'￥25',
                serviceInfo:'针对生活在自己家，能够生活自理的老年人',
                serviceStruct:'我为高居家服务',
                form: {
                    serviceID:"1",
                    name: '',
                    age:'',
                    selfcare:'',
                    illness:'',
                    peopleNum:'',
                    pets:'',
                    address:'',
                    others:'',
                    contact:'',
                    contactTel:'',
                    date1:'',
                    date2:''
                }
            }
        },
        methods: {
            init(){
                this.$axios({
                    method:'post',
                    url:this.$requireIP+'item/showbyitem',
                    data:{
                        item:window.sessionStorage.getItem('servename'),
                    }
                }).then(response=>{
                    this.servicePrice=response.data.price,
                        this.serviceInfo=response.data.description,
                        this.serviceStruct=response.data.ins
                })
            },
            onSubmit() {
                console.log('submit!');
                this.$axios({
                    method:'post',
                    url:this.$requireIP+'transcation/generateorder',
                    data:{
                        oldname: this.form.name,
                        name:window.localStorage.getItem('name'),
                        phonenumber:window.localStorage.getItem('phone'),
                        conditions:"未确认",
                        age:this.form.age,
                        selfcare:this.form.selfcare,
                        illness:this.form.illness,
                        peopleNum:this.form.peopleNum,
                        pets:this.form.pets,
                        address:this.form.address,
                        others:this.form.others,
                        contact:this.form.contact,
                        contactTel:this.form.contactTel,
                        item:window.sessionStorage.getItem('servename'),
                    }
                }).then(
                    console.log(this.form.address),
                    this.$router.push('/home')
                )
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .primary
        width 80%
        border-radius 30px
        background-color orangered
        color white
        font-size 25px
    .addoldbtn
        background-color transparent
        background-image url("../../assets/icon/添加老人.png")
        background-size cover
        color black
        width 20px
        height 20px
</style>