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
            search: '',
            visible: true,
        }
    },
    components: {
        FilteredPropertiesList,
        BasicFilter
    },
    methods: {
        sendSearchParametres(formData) {
            console.log("PARTE CHIAMATA AXIOS", formData);
            store.searchedBool = false;

            axios.post(store.apiUrl, formData)
                .then((response) => {
                    console.log('HO FATTO LA CHIAMATA', response.data.result);
                    this.properties = response.data.result;
                    store.searchedBool = true;
                })
                .catch(function (error) {
                    console.log(error);
                    store.searchedBool = true;
                });
        },
        extractNumbers(queryString) {
            const params = new URLSearchParams(queryString);
            const latitude = parseFloat(params.get("latitude"));
            const longitude = parseFloat(params.get("longitude"));
            const radius = parseFloat(params.get("radius"));
            const beds = parseFloat(params.get("beds"));
            const rooms = parseFloat(params.get("rooms"));
            const services = params.get("services");
            return { latitude, longitude, radius, beds, rooms, services };
        }
    },
    created() {
        // Using current Route
        const route = useRoute();

        //Picking the slug in the URL
        console.log("1)QUESTO è LO SLUG", route.params.slug);
        const slug = route.params.slug;

        //Extract the params from the slug
        console.log("QUESTI SONO I PARAMETRI", this.extractNumbers(slug));
        const formData = this.extractNumbers(slug);

        const params = new URLSearchParams(slug);
        const search = params.get('search');

        this.search = search;

        //Calling the function to search the filtered data
        this.sendSearchParametres(formData);
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="fw-bold my-5 text-center"> Searched Properties List:</h1>
            </div>
            <BasicFilter :visible="true" @propertyCall="sendSearchParametres" class="mb-5" />
            <h3 class="mb-4" v-if="properties.length != 0">{{ search }}: {{ properties.length }} {{ (properties.length
                == 1 ? "property" :
                "properties") }} found
            </h3>
            <FilteredPropertiesList :withShow="true" :properties="properties" />
        </div>
    </div>

</template>

<style scoped></style>