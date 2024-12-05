<script>
import { store } from '../js/store';

export default {
    data() {
        return {
            searchProperty: '',
            filteredProperties: [],
            store,
        }
    },
    props: {
        propertyObj: {
            type: Object,
            required: true,
        },
    },
    methods: {
        filterList() {
            const query = this.searchProperty.toLowerCase();
            this.filteredProperties = this.property.filter((item) =>
                item.title.toLowerCase().includes(query) // Filtra per lettere iniziali
            );
        },
    },
    mounted() {
        // Mostra tutti gli elementi all'inizio
        this.filteredProperties = this.property;
    },
}
</script>

<template>

    <nav class="navbar navbar-light">
        <div class="container-fluid">
            <div class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Search a property.." v-model="searchProperty"
                    aria-label="Search" @input="filterList">
                <button class="btn btn-dark" type="submit">Search!</button>
            </div>
            <div>
                <ul>
                    <li v-for="property in filteredProperties" :key="property.id">{{ property.title }}</li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<style scoped></style>