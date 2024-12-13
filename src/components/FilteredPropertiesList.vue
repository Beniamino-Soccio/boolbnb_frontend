<script>
import PropertiesListItem from './PropertiesListItem.vue';
import BasicFilter from './BasicFilter.vue';
import AppLoader from './AppLoader.vue';
import { store } from '../js/store';


export default {
    name: 'FilteredPropertiesList',
    components: {
        PropertiesListItem,
        BasicFilter,
        AppLoader,
    },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/admin/properties',
            store,
        }
    },
    props: {
        withShow: {
            required: false,
            type: Boolean,
        },
        properties: {
            required: true,
            type: Array
        }
    },
    methods: {
    },
    computed: {
    }
}
</script>

<template>

    <section class="col-12 container justify-content-between" v-if="store.searchedBool">
        <div class="searched-property" v-if="properties.length > 0">
            <div class="d-flex justify-content-evenly flex-wrap">
                <PropertiesListItem v-for="property in properties" :key="property.id" :propertyObj="property" />
            </div>
        </div>
        <div class=" no-result text-center" v-else>
            <h2 class="py-5">Sorry, We didn't found any properties with these features</h2>
        </div>
    </section>

    <AppLoader v-else />

</template>

<style scoped>

</style>