<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="老人姓名">
                <el-input v-model="form.name"></el-input>
                <div style="display:inline-flex">
                    <cube-button class="addoldbtn" @click="addOld"></cube-button>
                    <p>选择老人</p>
                    <el-select v-model="value" placeholder="请选择"
                               change="addOld"
                               style="width: 150px">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
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
            <el-form-item label="常住人口">
                <el-select v-model="form.peopleNum" placeholder="请选择">
                    <el-option label="1" value="1"></el-option>
                    <el-option label="2" value="2"></el-option>
                    <el-option label="3" value="3"></el-option>
                    <el-option label="4及以上" value="4"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="宠物">
                <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>

            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
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
                        <el-date-picker type="date" placeholder="选择结束日期" v-model="form.date2"  style="width: 100%;"></el-date-picker>
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
            this.serviceName=window.sessionStorage.getItem('servename'), this.servicePrice=this.$route.query.mitem.price;
            this.serviceInfo=this.$route.query.mitem.description;
            this.serviceStruct=this.$route.query.mitem.ins;
            this.getOldlist()
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
                },
                value:'',
                options: [{
                    value: '王大狗',
                }, {
                    value: '王二狗',
                }, {
                    value: '王三狗',
                }, ],
            }
        },
        methods: {
            timestring(utc_datetime) {
                // 转为正常的时间格式 年-月-日 时:分:秒
                var T_pos = utc_datetime.indexOf("T");
                var Z_pos = utc_datetime.indexOf("Z");
                var year_month_day = utc_datetime.substr(0, T_pos);
                var hour_minute_second = utc_datetime.substr(
                    T_pos + 1,
                    Z_pos - T_pos - 1
                );
                var new_datetime = year_month_day + " " + hour_minute_second; // 2017-03-31 08:02:06
                // 处理成为时间戳
                var timestamp = new Date(Date.parse(new_datetime));
                timestamp = timestamp.getTime();
                timestamp = timestamp / 1000;
                // 增加8个小时，北京时间比utc时间多八个时区
                timestamp = timestamp + 16 * 60 * 60;
                // 时间戳转为时间
                var beijing_datetime = new Date(parseInt(timestamp) * 1000)
                    .toLocaleString()
                    .replace(/年|月/g, "-")
                    .replace(/日/g, " ");
                return beijing_datetime;
            },

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
                console.log(this.form.date1)
                this.$axios({
                    method:'post',
                    url:this.$requireIP+'transcation/generateorder',
                    data:{
                        oldname: this.form.name,
                        userid:window.localStorage.getItem('userId'),
                        phonenumber:window.localStorage.getItem('phone'),
                        conditions:"未确认",
                        // detail:this.form.selfcare+
                        //         +this.form.illness+
                        //         +this.form.peopleNum+
                        //         +this.form.pets,
                        age:this.form.age,
                        selfcare:this.form.selfcare,
                        illness:this.form.illness,
                        peopleNum:this.form.peopleNum,
                        pets:this.form.pets,
                        address:this.form.address,
                        demand:this.form.others,
                        contact:this.form.contact,
                        contactTel:this.form.contactTel,
                        item:window.sessionStorage.getItem('servename'),
                        begindate:this.form.date1,
                        finishdate:this.form.date2,
                        starttime:'8:00',
                        endtime:'17:00',

                    }
                }).then(
                    console.log(this.form.address),
                    this.$router.push('/home')
                )
            },
            getOldlist(){
                this.$axios({
                    method:'post',
                    url:'',
                    data:{
                        name:window.localStorage.getItem('name')
                    }
                }).then(response=>{
                    if (response.status!== 200) {
                        console.log("失败")
                    } else {
                        console.log(1)
                        this.options=response.data
                    }

                })
            },
            addOld(){
                this.form.name=this.value
                this.getOldByName(this.value)
                console.log(this.value)
                console.log(this.form.name)
            },
            getOldByName(name){
                this.$axios({
                    method:'post',
                    url:'',
                    data:{
                        oldname:name
                    }
                }).then(response=>{
                    if (response.status!== 200) {
                        console.log("失败")
                    } else {
                        console.log(1)
                        this.form.age=response.data.age;
                        this.form.selfcare=response.data.selfcare;
                        this.form.illness=response.data.illness;
                    }

                })
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