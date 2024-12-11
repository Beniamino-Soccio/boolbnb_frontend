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
    methods: {
        searchAProperty() {
            tt.services
                .geocode({
                    key: important.apiKey,
                    query: this.searchProperty,
                })
                .then(p => {
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
        saveDataAddress() {
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
                this.$emit('propertyCall');
            }
        }
    },
    computed: {
        slug() {
            return "?latitude=" + store.latitude + "&longitude=" + store.longitude + "&radius=" + store.radius;
        }
    }
}
</script>

<template>
    <div class="container-fluid" id="search-bar">
        <div class="d-flex">
            <input class="form-control" type="text" placeholder="Search a property.." v-model="searchProperty"
                aria-label="Search" @input="searchAProperty" @keyup.enter="saveDataAddress">
            <router-link class="btn btn-dark" type="submit" @click="saveDataAddress" aria-current="page"
                :to="{ 'name': 'filtered-properties', params: { slug: slug } }">
                Search
            </router-link>
        </div>
        <div class="results-address" :class="{ 'd-none': searchProperty === '' }">
            <div class="address" :key="searchedAddresses[id].id" v-for="(address, id) in searchedAddressesName">
                <span @click="selectAnAddress(address)">{{
                    address
                    }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
#search-bar {
    display: flex;
    max-width: 500px;
    flex-direction: column;
    position: relative;

    .results-address {
        position: absolute;
        top: 38px;
        width: 78%;

        .address {
            width: 100%;
            color: black;
            background-color: white;
            cursor: pointer;
            padding: 3px 0;
            border-top: 1px solid black;
        }
    }
}

.br {
    border: 1px dashed black;
}
</style>