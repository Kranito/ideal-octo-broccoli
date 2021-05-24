<template>
    <div>
        <SideBar class="sidebar" style="height: 1vh"></SideBar>
    </div>
</template>

<script type="text/ecmascript-6">
    import SideBar from "@/components/SideBar";
    export default {
        name:"homepage",
        data () {
            return {

            }
        },
        methods: {

        },
        computed: {
        },
        components: {
            SideBar
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .sidebar
        margin-bottom :0
</style>