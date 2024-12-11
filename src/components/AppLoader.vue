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
/* HTML: <div class="loader"></div> */
.loader {
  width: 145px;
  height: 33px;
  border-radius: 20px;
  color: #514b82;
  border: 2px solid;
  position: relative;
}
.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l6 2s infinite;
}
@keyframes l6 {
    100% {inset:0}
}





</style>
