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
            searchedAddressesName: [],
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
                    this.searchedAddressesName = p.results.map((item) => item.address.freeformAddress);

                })
                .catch(function (reason) {
                    console.log(reason)
                })
        },
        selectAnAddress(r) {
            this.searchProperty = '';
            this.searchProperty = r;
            this.searchedAddressesName = [];
        },
        saveDataAddress(a) {
            if (this.searchProperty.length < 2) {
                console.log("nessun dato inserito nella ricerca");
            } else {
                for (let i = 0; i < this.searchedAddresses.length; i++) {
                    if (this.searchProperty == this.searchedAddresses[i].address.freeformAddress) {
                        store.latitude = this.searchedAddresses[i].position.lat;
                        store.longitude = this.searchedAddresses[i].position.lng;
                    } else if (i === this.searchedAddresses.length - 1) {
                        store.latitude = this.searchedAddresses[0].position.lat;
                        store.longitude = this.searchedAddresses[0].position.lng;
                    }
                };

                console.log("latituidne", store.latitude);
                console.log("longitudine", store.longitude);
            }
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-light">
        <div class="container-fluid">
            <div class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search a property.." v-model="searchProperty"
                    aria-label="Search" @input="searchAProperty" @keyup.enter="saveDataAddress">
                <button class="btn btn-dark" type="submit" @click="saveDataAddress">Search</button>
            </div>
            <div class="results-address" :class="{ 'd-none': searchProperty === '' }">
                <div class="address" v-for="address in searchedAddressesName"><span @click="selectAnAddress(address)">{{
                    address
                        }}</span></div>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>