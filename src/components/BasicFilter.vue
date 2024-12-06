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
            selectedAddress: [],
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
        },
        selectAnAddress(want, r) {
            this.searchProperty = '';
            this.selectedAddress = [];
            this.selectedAddress = want;
            this.searchProperty = r;
            this.searchedAddresses = [];

        },
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
                <div class="address" v-for="address in searchedAddresses"><span
                        @click="selectAnAddress(address, address.address.freeformAddress)">{{
                            address.address.freeformAddress
                        }}</span></div>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>