<script>

import PropertyList from '../components/PropertyList.vue';

export default {
    name: 'AppProperty',
    data() {
        return {

        }
    },
    components: {
        PropertyList,
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold fst-italic text-decoration-underline my-5 text-center"> Properties List:</h1>
            </div>
            <PropertyList />
        </div>
    </div>

</template>

<style scoped></style>