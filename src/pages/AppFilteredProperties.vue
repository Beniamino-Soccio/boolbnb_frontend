<script>

import FilteredPropertiesList from '../components/FilteredPropertiesList.vue';

export default {
    name: 'AppProperties',
    data() {
        return {

        }
    },
    components: {
        FilteredPropertiesList,
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold my-5 text-center"> Searched Properties List:</h1>
            </div>
            <FilteredPropertiesList :withShow="true" />
        </div>
    </div>

</template>

<style scoped></style>