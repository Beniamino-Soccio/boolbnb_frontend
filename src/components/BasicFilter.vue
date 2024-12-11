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

<template>
    <div class="container-fluid" id="search-bar">
        <div class="d-flex">
            <input class="form-control" type="text" placeholder="Search a property.." v-model="searchProperty"
                aria-label="Search" @input="searchAProperty" @keyup.enter="saveDataAddress">            
            <router-link class="btn btn-dark" type="submit" @click="saveDataAddress" aria-current="page"
             :to="{ 'name': 'filtered-properties' }"> Search </router-link>
             <button class="btn btn-dark" type="button" @click="toggleFilterPopup">
                Filters
            </button>
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

<style scoped>
#search-bar {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
    width: 600px;
    padding: 1rem; 
    background-color: #fff; 
    border: 6px solid #ffc107; 
    border-radius: 8px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease; 
}



#search-bar:focus-within {
    border-color: #ffdd57; 
    box-shadow: 0 0 10px rgba(255, 193, 7, 0.6); 
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
    top: 66px;
    left: 189px;
    transform: translateX(-50%);
    background-color: #ffffff;
    width: 346px;
    max-width: 600px;
    border-radius: 2px;
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
 .form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem; 
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6; 
    color: var(--bs-body-color);
    background-color: var(--bs-body-bg);
    background-clip: padding-box;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: all 0.2s ease-in-out; 
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); 
}


.form-control:hover {
    border-color: var(--bs-primary); 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}


.form-control:focus {
    border-color: var(--bs-primary);
    outline: none; 
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25); 
}


.form-control:disabled {
    background-color: var(--bs-secondary-bg);
    color: var(--bs-secondary-color);
    cursor: not-allowed;
    opacity: 0.6;
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

.btn{
    background-color: white;
    padding: 5px 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    box-shadow: 2px 6px 0 1px #007bff;
    transition: all 0.1s ease-in-out;
    color: black;
    margin: 7px;
}
</style>
