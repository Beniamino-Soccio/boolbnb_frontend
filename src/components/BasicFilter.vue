<template>
    <div class="container-fluid" id="search-bar">
        <div class="d-flex">
            <input class="form-control" type="text" placeholder="Search a property.." v-model="searchProperty"
                aria-label="Search" @input="searchAProperty" @keyup.enter="saveDataAddress">
            <button class="btn btn-dark" type="button" @click="toggleFilterPopup">
                Filters
            </button>
            <router-link class="btn btn-dark" type="submit" @click="saveDataAddress" aria-current="page"
                :to="{ 'name': 'filtered-properties' }">
                Search
            </router-link>
        </div>        
        
        <div class="filter-popup" v-if="showFilters">
            <div class="filter-popup-overlay" @click="toggleFilterPopup"></div>
            <div class="filter-popup-content">
                <h3>Filters</h3>
                <div class="form-group">
                    <label for="radius">Radius (km)</label>
                    <input type="number" id="radius" v-model="filters.radius" class="form-control" min="1"
                        placeholder="Enter radius in km" />
                </div>
                <div class="form-group">
                    <label for="rooms">Number of Rooms</label>
                    <input type="number" id="rooms" v-model="filters.rooms" class="form-control" min="1"
                        placeholder="Enter number of rooms" />
                </div>
                <div class="form-group">
                    <label for="beds">Number of Beds</label>
                    <input type="number" id="beds" v-model="filters.beds" class="form-control" min="1"
                        placeholder="Enter number of beds" />
                </div>
                <div class="form-group">
                    <label>Services</label>
                    <div v-for="service in availableServices" :key="service" class="form-check">
                        <input type="checkbox" :id="service" v-model="filters.services" :value="service"
                            class="form-check-input" />
                        <label :for="service" class="form-check-label">{{ service }}</label>
                    </div>
                </div>
                <button class="btn btn-secondary" @click="applyFilters">Apply Filters</button>
                <button class="btn btn-secondary" @click="resetFilters">Reset Filters</button>
            </div>
        </div>
        
        <div class="results-address" :class="{ 'd-none': searchProperty === '' }">
            <div class="address" :key="searchedAddresses[id].id" v-for="(address, id) in searchedAddressesName">
                <span @click="selectAnAddress(address)">{{ address }}</span>
            </div>
        </div>
    </div>
</template>

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
            showFilters: false,
            filters: {
                radius: '',
                rooms: '',
                beds: '',
                services: [],
            },
            availableServices: ['wifi', 'parking', 'pool', 'gym', 'petsAllowed'],
        };
    },
    methods: {
        toggleFilterPopup() {
            this.showFilters = !this.showFilters;
        },
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
                    console.log(reason);
                });
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
                }
                console.log("latituidne", store.latitude);
                console.log("longitudine", store.longitude);
                this.$emit('propertyCall');
            }
        },
        applyFilters() {
            store.filters = this.filters;
            this.showFilters = false;
            console.log("Filtri applicati:", this.filters);
        },
        resetFilters() {
            this.filters = {
                radius: '',
                rooms: '',
                beds: '',
                services: [],
            };
            console.log("Filtri resettati");
        },
    },
};
</script>

<style scoped>
#search-bar {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    width: 600px;
}

.filter-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.filter-popup-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

.filter-popup-content {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    z-index: 1001;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.results-address {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;   
    z-index: 2000;
    width: 80%; 
    max-width: 600px; 
    border-radius: 12px; 
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);     
    overflow-y: auto; 
    max-height: 300px; 
    font-size: 0.95rem; 
}

.address {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: black;
}

.address:hover {
    background-color: #f8f9fa;
}

 h3  {
    font-family: "PLayfair Display", sans-serif;
    font-weight: 800;
    color: black;
 }

 .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
    color: black;
}

label {
    display: inline-block;
    color: black;
}
</style>
