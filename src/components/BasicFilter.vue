<script>
import { store } from '../js/store';
import { important } from '../js/important';
import tt, { services } from '@tomtom-international/web-sdk-services';
import { useRoute } from 'vue-router';
import axios from 'axios';

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
                latitude: '',
                longitude: '',
                radius: '20',
                rooms: '1',
                beds: '1',
            },
            availableServices: [],
            selectedServices: [],
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
        saveDataAddress() {
            if (this.searchProperty.length < 2) {
                console.log("nessun dato inserito nella ricerca");
            } else {
                for (let i = 0; i < this.searchedAddresses.length; i++) {
                    if (this.searchProperty == this.searchedAddresses[i].address.freeformAddress) {
                        this.filters.latitude = this.searchedAddresses[i].position.lat;
                        this.filters.longitude = this.searchedAddresses[i].position.lng;
                    } else if (i === this.searchedAddresses.length - 1) {
                        this.filters.latitude = this.searchedAddresses[0].position.lat;
                        this.filters.longitude = this.searchedAddresses[0].position.lng;
                    }
                }
                console.log("latituidne", this.filters.latitude);
                console.log("longitudine", this.filters.longitude);
            }
        },
        searchAddress() {
            //Creating object formData with filter for the API call in AppFilteredProperties
            const formData = {
                latitude: this.filters.latitude,
                longitude: this.filters.longitude,
                radius: this.filters.radius,
                rooms: this.filters.rooms,
                beds: this.filters.beds,
                services: this.serviceSlug,
            }

            // Custom event 
            this.$emit('propertyCall', formData);
        },
        applyFilters() {
            /*this.filters.radius = this.filters.radius;
            this.filters.rooms = this.filters.rooms;
            this.filters.beds = this.filters.beds;
            console.log("Filtri applicati:", this.filters);*/
            this.showFilters = false;
        },
        resetFilters() {
            //RESETTARE I SERVIZI
            this.selectedServices = [];
            console.log("Filtri resettati", this.filters);
        },
        extractNumbers(queryString) {
            const params = new URLSearchParams(queryString);
            const search = params.get("search");
            const latitude = parseFloat(params.get("latitude"));
            const longitude = parseFloat(params.get("longitude"));
            const radius = parseFloat(params.get("radius"));
            const beds = parseFloat(params.get("beds"));
            const rooms = parseFloat(params.get("rooms"));
            const services = params.get("services");
            return { search, latitude, longitude, radius, beds, rooms, services };
        },
        getServices() {
            axios.get(store.apiUrlServices)
                .then((response) => {
                    console.log('HO FATTO LA CHIAMATA', response.data.result);
                    this.availableServices = response.data.result;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    computed: {
        slug() {
            return `?search=${this.searchProperty}&latitude=${this.filters.latitude}&longitude=${this.filters.longitude}
            &radius=${this.filters.radius}
            &beds=${this.filters.beds}&rooms=${this.filters.rooms}&services=${this.serviceSlug}`;
        },
        serviceSlug() {
            return this.selectedServices.join('-');
        },
        isDisabled() {
            if (this.searchProperty == "") {
                return true;
            }
            return false;
        }
    },
    created() {
        this.getServices();

        // Using current Route
        const route = useRoute();

        //Picking the slug in the URL
        console.log("1)QUESTO è LO SLUG", route.params.slug);
        const slug = route.params.slug;

        //Extract the params from the slug
        console.log("QUESTI SONO I PARAMETRI", this.extractNumbers(slug));
        const formData = this.extractNumbers(slug);

        if (formData.search != null) {
            this.searchProperty = formData.search;
            this.filters.latitude = formData.latitude;
            this.filters.longitude = formData.longitude;
            this.filters.radius = formData.radius;
            this.filters.rooms = formData.rooms;
            this.filters.beds = formData.beds;
            if (formData.services.length != 0) {
                this.selectedServices = formData.services.split('-');
            }
        }

    }
}
</script>

<template>
    <div class="container-fluid" id="search-bar">
        <div class="d-flex res-display align-items-center justify-content-between">
            <div class="search-input col-xxl-4 col-xl-4 col-lg-4 col-md-9 col-sm-9 col-9 d-flex justify-content-center flex-column">
                <label for="radius">Search a Location </label>
                <input class="form-control" type="text" placeholder="Es. Torino, Via Roma 5" v-model="searchProperty"
                    aria-label="Search" @input="searchAProperty" @keyup.enter="saveDataAddress(); searchAddress()">
            </div>

            <div class="number-input d-flex row ms-xxl-2 ms-xl-2 ms-lg-2">
                <div class=" number radius-input col-xxl-4 col-xl-4 col-lg-4 col-md-3 col-sm-3 col-3 ms-0">
                    <label for="radius">Radius<span class="res">(km)</span> </label>
                    <input type="number" id="radius" v-model="filters.radius" class="form-control" min="1" />
                </div>

                <div class="number rooms-input col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 ms-0">
                    <label for="rooms">Rooms</label>
                    <input type="number" id="rooms" v-model="filters.rooms" class="form-control" min="1" />
                </div>

                <div class=" number beds-input col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3 ms-0">
                    <label for="beds">Beds</label>
                    <input type="number" id="beds" v-model="filters.beds" class="form-control" min="1" />
                </div>
            </div>


            <button class="btnmodal res-services col-lg-2 col-md-4" type="button" @click="toggleFilterPopup">
                {{ (selectedServices.length == 0 ? "Add required services" : "Edit require Services") }}
            </button>

            <router-link class="text-black text-decoration-none res-search col-xxl-1 col-xl-1 col-lg-2 col-md-2 d-flex justify-content-center" :class="{ disabled: isDisabled }" type="submit"
                @click="[saveDataAddress(), searchAddress()]" aria-current="page"
                :to="{ 'name': 'filtered-properties', params: { slug: slug } }">

                <button class="btnmodal"> Search </button>

            </router-link>
        
            
        </div>

        <div class="filter-popup" v-if="showFilters">
            <div class="filter-popup-overlay" @click="toggleFilterPopup"></div>
            <div class="filter-popup-content">
                <h3 class="text-center mb-3">Additional Services</h3>
                <ul class="list-group">
                    <li v-for="service in availableServices" :key="service" class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" v-model="selectedServices"
                            :id="service.name" :value="service.id">
                        <label class="form-check-label" :for="service.name">
                            <i :class="service.icon_url"></i>
                            {{ service.name }}
                        </label>
                    </li>
                </ul>
                <div class="buttons d-flex justify-content-around pt-3">
                    <button class="btn btn-secondary" @click="applyFilters">Apply Filters</button>
                    <button class="btn btn-secondary" @click="resetFilters">Reset Filters</button>
                </div>
            </div>
        </div>

        <div class="results-address" :class="{ 'd-none': searchProperty === '' }" @click="saveDataAddress">
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
    /*width: 600px;*/
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

h3 {
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

.btn {
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

.number-input {
    flex-basis: 30%;
}

.number {
    margin-left: 10px;
}

.disabled {
    opacity: 0.5;
    pointer-events: none;
}

/* media query -------------------------------------------------------------------------------------------------------------------*/
@media (max-width: 767px) {
    .res-display{
        flex-direction: column;
    }
    .res-search{
        display: block;
    }
    .radius-input, .beds-input, .rooms-input{
        display: inline-block;
        margin-bottom: 20px;
    }
    .number-input{
        justify-content: center;
    }
    .search-input{
        margin-bottom: 20px;
    }
}
@media (max-width: 575px) {
    .res-display{
        flex-direction: column;
    }
    .res-search{
        display: block;
    }
    .radius-input, .beds-input, .rooms-input{
        display: inline-block;
        margin-bottom: 20px;
    }
    .number-input{
        justify-content: center;
    }
    .search-input{
        margin-bottom: 20px;
    }
}
@media (max-width: 575px) {
    .res-display{
        flex-direction: column;
    }
    .res-search{
        display: block;
    }
    .radius-input, .beds-input, .rooms-input{
        display: inline-block;
        margin-bottom: 20px;
    }
    .number-input{
        justify-content: center;
    }
    .search-input{
        margin-bottom: 20px;
    }
}
@media (max-width: 991px) {
    .res-display{
        flex-direction: column;
    }
    .res-search{
        display: block;
    }
    .radius-input, .beds-input, .rooms-input{
        display: inline-block;
        margin-bottom: 20px;
    }
    .number-input{
        justify-content: center;
    }
    .search-input{
        margin-bottom: 20px;
    }
}
</style>
