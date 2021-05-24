<template>
    <div class="main_box">
        <service-nav-bar class="detail_box"></service-nav-bar>
    </div>
</template>

<script>
    import ServiceNavBar from "@/components/serviceComponents/serviceNavBar";
    export default {
        name: "service",
        components: {ServiceNavBar}
    }
</script>

<style lang="stylus" scoped>
    .detail_box
        position fixed
        top 30%

</style>