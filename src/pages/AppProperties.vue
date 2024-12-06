<script>

import PropertiesList from '../components/PropertiesList.vue';

export default {
    name: 'AppProperties',
    data() {
        return {

        }
    },
    components: {
        PropertiesList,
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold my-5 text-center"> Properties List:</h1>
            </div>
            <PropertiesList :withShow="true" />
        </div>
    </div>

</template>

<style scoped></style>