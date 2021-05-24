<template>
    <div class="edit_container">
        <span v-html="content"></span>
        <img src="https://i0.hdslb.com/bfs/album/760832559d31aa539fefd24645b6986ef39b9192.jpg@518w.webp"
                style="width: 100%;margin-bottom: 50px">
    </div>
</template>

<script>
    export default {
        name:"serviceDetails",
        data(){
            return {
                content: ``,
                editorOption: {}
            }
        },
        methods: {
            getMsg(){
                this.$axios({
                        method: 'post',
                        url: this.$requireIP+'',
                        data:
                            {
                                id:this.$route.query.serviceID
                            }
                    }
                ).then(
                    response => {
                        console.log(2)
                        if (response.status!== 200) {
                            console.log("失败")
                            this.$message.error('失败')
                            return this.$message.error('失败！')
                        } else {
                            this.$message.success('成功')
                            console.log(response)
                            this.content=response.data
                        }
                    }, a => {
                        console.log(a)
                    })
            }
        }
    }
</script>

<style>
    #serviceDetails {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>