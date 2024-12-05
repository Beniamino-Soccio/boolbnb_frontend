<script>
import axios from 'axios';
import PropertiesListItem from './PropertiesListItem.vue';

export default {
    name: 'PropertyList',
    components: {
        PropertiesListItem,
    },
    data() {
        return {
            propertyList: [],
            apiUrl: 'http://127.0.0.1:8000/api/admin/properties'
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
                    console.log(response.data.result);
                    this.propertyList = response.data.result;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
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
}
</script>

<template>

    <div class="col-12">
        <div id="post-list-wrapper">
            <PropertiesListItem v-for="property in propertyList" :key="property.id" :propertyObj="property"
                @click="show(property.id)" />
        </div>
    </div>

</template>

<style scoped></style>