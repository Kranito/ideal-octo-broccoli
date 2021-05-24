<template>
    <div>
        <span v-html="content"></span>
        <img src="https://i0.hdslb.com/bfs/album/e908b05467cea3f27e2369c7c9352dc15a312a2a.jpg@518w.webp"
             style="width: 100%">
    </div>

</template>

<script>
    export default {
        name: "StructDetails",
        data(){
            return {
                content:``
            }
        },
        methods:{
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

<style scoped>

</style>