<script>
import axios from 'axios';
import { store } from '../js/store.js'
import { useRoute } from 'vue-router'

import BasicFilter from '../components/BasicFilter.vue';
import FilteredPropertiesList from '../components/FilteredPropertiesList.vue';

export default {
    name: 'AppProperties',
    data() {
        return {
            store,
            properties: [],
            formData: {
                latitude: '',
                longitude: '',
                radius: '',
                rooms: '',
                beds: '',
                services: '',
            },
            route: {},
        }
    },
    components: {
        FilteredPropertiesList,
        BasicFilter
    },
    methods: {
        sendSearchParametres() {
            console.log("PARTE CHIAMATA AXIOS");
            console.log(this.route.params.slug);
            const slug = this.route.params.slug;
            console.log(this.extractNumbers(slug));
            this.formData = this.extractNumbers(slug);

            const formData = {
                latitude: this.formData.latitude,
                longitude: this.formData.longitude,
                radius: this.formData.radius,
                rooms: this.formData.rooms,
                beds: this.formData.beds,
            }

            axios.post(store.apiUrl, formData)
                .then((response) => {
                    store.searchedBool = false;
                    console.log(response.data.result);
                    this.properties = response.data.result;
                    if (response.data.result.length > 0) {
                        store.searchedBool = true;
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        extractNumbers(queryString) {
            const params = new URLSearchParams(queryString);
            const latitude = parseFloat(params.get("latitude"));
            const longitude = parseFloat(params.get("longitude"));
            const radius = parseFloat(params.get("radius"));
            const beds = parseFloat(params.get("beds"));
            const rooms = parseFloat(params.get("rooms"));
            const services = parseFloat(params.get("services"));
            return { latitude, longitude, radius, beds, rooms, services };
        }
    },
    created() {
        this.route = useRoute();
        /*console.log("PARTE CHIAMATA AXIOS");
        const slug = this.route.params.slug;
        console.log(this.extractNumbers(slug));
        this.formData = this.extractNumbers(slug);*/
        this.sendSearchParametres();
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
            <FilteredPropertiesList :withShow="true" :properties="properties" />
        </div>
    </div>

</template>

<style scoped></style>