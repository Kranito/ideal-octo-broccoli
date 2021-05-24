<template>
    <div>
        <div style="display: inline-flex">
            <img src="../../assets/icon/评价.png" height="23" width="23"/>
            <div style="padding-top: 3px;font-size: 20px">服务评价</div>
        </div>
        <div class="comment_list">
            <cube-scroll style="height: 400px;width:98%;z-index: 0">
                <ul>
                    <div v-for=" (contacter,i) in comments" :key="i">
                        <comment-card style="margin-top: 10px" :mitem="contacter">
                        </comment-card>
                    </div>
                </ul>
            </cube-scroll>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userComments",
        data(){
            return{
                comments:[{
                    username:"王凌云",
                    comment:'服务很好，下次还来'
                },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    },
                    {
                        username:"王凌云",
                        comment:'服务很好，下次还来'
                    }]
            }
        }
    }
</script>

<style scoped>

</style>