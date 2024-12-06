<script>
import { store } from '../js/store';
import { important } from '../js/important';
import tt from '@tomtom-international/web-sdk-services';

export default {
    data() {
        return {
            store,
            important,
            searchProperty: '',
            searchedAddresses: [],
        }
    },
    props: {
        propertyObj: {
            type: Object,
            required: true,
        },
    },
    methods: {
        searchAProperty() {
            tt.services
                .geocode({
                    key: important.apiKey,
                    query: this.searchProperty,
                })
                .then(p => {
                    console.log(p.results);
                    this.searchedAddresses = p.results;
                })
                .catch(function (reason) {
                    console.log(reason)
                })
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
            <div class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search a property.." v-model="searchProperty"
                    aria-label="Search" @input="searchAProperty">
                <button class="btn btn-dark" type="submit">Search!</button>
            </div>
            <div class="results-address">
                <div class="address" v-for="address in searchedAddresses" @click=""><span>{{
                        address.address.freeformAddress
                        }}</span></div>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>