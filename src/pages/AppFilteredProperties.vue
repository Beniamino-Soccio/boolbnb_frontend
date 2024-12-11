<script>
import axios from 'axios';
import { store } from '../js/store.js'

import BasicFilter from '../components/BasicFilter.vue';
import FilteredPropertiesList from '../components/FilteredPropertiesList.vue';

export default {
    name: 'AppProperties',
    data() {
        return {
            store,
        }
    },
    components: {
        FilteredPropertiesList,
        BasicFilter
    },
    methods: {
        sendSearchParametres() {
            const formData = {
                latitude: store.latitude,
                longitude: store.longitude,
                radius: store.radius
            }

            axios.post(store.apiUrl, formData)
                .then((response) => {
                    store.searchedBool = false;
                    console.log(response.data.result);
                    store.property = response.data.result;
                    if (response.data.result.length > 0) {
                        store.searchedBool = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        console.log("sono il router:", this.$router.currentRoute)
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold my-5 text-center"> Searched Properties List:</h1>
            </div>
            <BasicFilter @propertyCall="sendSearchParametres" class="mb-5" />
            <FilteredPropertiesList :withShow="true" />
        </div>
    </div>

</template>

<style scoped></style>