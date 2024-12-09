<script>
import axios from 'axios';
import PropertiesListItem from './PropertiesListItem.vue';
import BasicFilter from './BasicFilter.vue';
import AppLoader from './AppLoader.vue';
import { store } from '../js/store';


export default {
    name: 'PropertyList',
    components: {
        PropertiesListItem,
        BasicFilter,
        AppLoader,
    },
    data() {
        return {
            propertyList: [],
            apiUrl: 'http://127.0.0.1:8000/api/admin/properties',
            store,
        }
    },
    props: {
        withShow: {
            required: false,
            type: Boolean,
        }
    },
    methods: {
        getProperties() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    this.propertyList = response.data.result;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
        show(propertyId) {
            if (this.withShow) {
                this.$router.push({ name: 'properties.show', params: { id: propertyId } })
            }
        }
    },
    created() {
        this.getProperties();
    },
    computed: {
        loaded() {
            return this.propertyList.length > 0;
        },
    }
}
</script>

<template>

    <section class="loader" v-if="!loaded">
        <AppLoader />
    </section>

    <section class="col-12 container justify-content-between" v-else>
        <div class="searched-property" v-if="store.searchedBool">
            <h2>Searched Property</h2>
            <div class="d-flex justify-content-center flex-wrap">
                <PropertiesListItem v-for="property in store.property" :key="property.id" :propertyObj="property"
                    @click="show(property.id)" />
            </div>
        </div>
        <div class="no-result text-center" v-else>
            <h2>Not found any properties near this location you searched.</h2>
        </div>
        <div class="all-properties">
            <h2>All Properties</h2>
            <div class="d-flex justify-content-center flex-wrap">
                <PropertiesListItem v-for="property in propertyList" :key="property.id" :propertyObj="property"
                    @click="show(property.id)" />
            </div>
        </div>
    </section>

</template>

<style scoped>
div.card:hover {
    background-color: #a8e2dd;
    color: #0e2a35;
}

.card {
    max-width: 400px;
}
</style>