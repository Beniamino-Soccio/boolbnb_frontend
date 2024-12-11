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
        <div class="all-properties">
            <div class="row d-flex justify-content-center ">
                <PropertiesListItem  class="card col-4 mx-3 p-0" v-for="property in propertyList" :key="property.id" :propertyObj="property"/>
            </div>
        </div>
    </section>

</template>

<style scoped>
div.card:hover {
    /* background-color: #a8e2dd; */
    color: #0e2a35;
}

.card {
    max-width: 400px;
    margin-bottom: 30px;
    /* box-shadow: 10px 10px 5px #dedede; */
    border-color: #007bff;
}

</style>