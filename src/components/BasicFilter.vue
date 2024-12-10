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
            availableServices: ['wifi', 'parking', 'pool', 'gym', 'petsAllowed'], // Servizi disponibili
        }
    },
    methods: {
        toggleFilterDropdown() {
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
                this.$emit('propertyCall');
            }
        },
        applyFilters() {
            store.filters = this.filters; // Salva i filtri nello store
            this.showFilters = false; // Chiudi il dropdown dei filtri
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

        toggleFilterDropdown() {
    if (this.showFilters) {
        const dropdown = document.querySelector('.filter-dropdown');
        dropdown.classList.remove('filter-dropdown-enter-active');
        dropdown.classList.add('filter-dropdown-leave-active');
        setTimeout(() => {
            this.showFilters = false;
        }, 300);
    } else {
        this.showFilters = true;
        this.$nextTick(() => {
            const dropdown = document.querySelector('.filter-dropdown');
            dropdown.classList.remove('filter-dropdown-leave-active');
            dropdown.classList.add('filter-dropdown-enter-active');
        });
    }
},
    }
    
}
</script>

<template>
    <div class="container-fluid" id="search-bar">
        <div class="d-flex">
            <input class="form-control" type="text" placeholder="Search a property.." v-model="searchProperty"
                aria-label="Search" @input="searchAProperty" @keyup.enter="saveDataAddress">
            <button class="btn btn-dark" type="button" @click="toggleFilterDropdown">
                Filters
            </button>
            <router-link class="btn btn-dark" type="submit" @click="saveDataAddress" aria-current="page"
                :to="{ 'name': 'filtered-properties' }">
                Search
            </router-link>
        </div>
        <div class="filter-dropdown" v-if="showFilters">
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
        <div class="results-address" :class="{ 'd-none': searchProperty === '' }">
            <div class="address" :key="searchedAddresses[id].id" v-for="(address, id) in searchedAddressesName">
                <span @click="selectAnAddress(address)">{{ address }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Container generale */
#search-bar {
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 10px;
}

/* Dropdown dei filtri */
.filter-dropdown {
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    border: 1px solid #ccc;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    max-width: 400px;
    width: 100%;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;
}

/* Stati di apertura */
.filter-dropdown-enter-active {
    opacity: 1;
    max-height: 500px; /* Adatta all'altezza dei contenuti */
}

.filter-dropdown-leave-active {
    opacity: 0;
    max-height: 0;
}

/* Pulsanti */
.filters-btn, .btn {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.filters-btn {
    background-color: #007bff;
    color: white;
}

.filters-btn:hover {
    background-color: #0056b3;
}

.btn-secondary {
    background-color: #f8f9fa;
    color: #333;
}

.btn-secondary:hover {
    background-color: #e0e0e0;
}

/* Input */
.form-control {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    font-size: 0.9rem;
    transition: border-color 0.2s ease;
}

.form-control:focus {
    border-color: #007bff;
    outline: none;
}

/* Servizi */
.form-check {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.form-check-input {
    width: 16px;
    height: 16px;
}

.form-check-label {
    font-size: 0.9rem;
    color: #555;
}

/* Indirizzi risultati */
.results-address {
    position: absolute;
    top: 60px;
    background-color: #fff;
    border: 1px solid #ccc;
    z-index: 2000;
    width: 78%;
    border-radius: 6px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.address {
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.address:hover {
    background-color: #f8f9fa;
}

/* Responsività */
@media (max-width: 768px) {
    .filter-dropdown {
        position: fixed;
        top: 10%;
        left: 5%;
        right: 5%;
        width: 90%;
        max-width: none;
        overflow-y: auto;
        padding: 15px;
    }
}

</style>
