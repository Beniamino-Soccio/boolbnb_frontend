<script>
export default {
    name: "AppLoader",
    data() {
        return {

        }
    }
}
</script>

<template>

    <section class="d-flex py-4">
        <div class="loader m-auto"></div>
    </section>


</template>

<style scoped lang="scss">
.loader {
    width: 120px;
    height: 20px;
    background:
        linear-gradient(#25b09b 0 0) left -40px top 0/40px 20px,
        linear-gradient(#ddd 0 0) center/100% 50%;
    background-repeat: no-repeat;
    animation: l5 1s infinite linear;
}

@keyframes l5 {
    100% {
        background-position: right -40px top 0, center
    }
}
</style>
