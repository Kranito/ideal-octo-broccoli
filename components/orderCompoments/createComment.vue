<template>
    <div style="">
        <div style="margin-top: 30%;width: 90%;margin-left: 5%">
            <cube-textarea v-model="comments" maxlength=300
                           placeholder="请在此输入您的意见(最多上传3张图片哦)">
            </cube-textarea>
            <br/>
            <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    limit=3
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
        </div>
        <div style="">
            <p style="font-size: 15px;margin-top: 30px;margin-left:15%;margin-bottom: 15px">给本次服务打个分吧！</p>
            <el-rate
                    v-model="rate"
                    :colors="colors"
                    style="margin-bottom: 55px;margin-left:15%">
            </el-rate>
            <p style="font-size: 15px;margin-top: 30px;margin-left:15%;margin-bottom: 15px">给本次服务人员打个分吧！</p>
            <el-rate
                    v-model="rate_server"
                    :colors="colors"
                    style="margin-bottom: 55px;margin-left:15%">
            </el-rate>
        </div>
        <div>
            <cube-button class="btn" @click="onSubmitCom">提交</cube-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "createComment",
        methods:{
            onSubmitCom() {
                // var date=new Date().getDate()
                this.$axios({
                    method:'post',
                    url:this.$requireIP+'a/order/estimate',
                    data:{
                        pid:this.ordernumber,
                        content: this.comments,
                        score:this.rate,
                        etime:"2021-04-12"
                    }

                });
                this.$router.go(-1)
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        },
        data(){
            return{
                 dialogImageUrl: '',
                 dialogVisible: false,
                 ordernumber: this.$route.query.ordernumber,
                 user: window.localStorage.getItem('userId'),
                 comments:'',
                 rate:'',
                 rate_server:'',
                 colors: ['#99A9BF', '#F7BA2A', '#FF9900']
            }
        }
    }
</script>

<style lang="stylus" scoped>
.btn
    border-radius 20px
    width 60%
    margin-left 20%
    color white
    background-color orangered

</style>