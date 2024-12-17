<script>

import axios from 'axios';
import PropertiesListItem from './PropertiesListItem.vue';


export default {
    name: 'SponsoredList',
    components: {
        PropertiesListItem
    },
    data() {
        return {
            sponsoredList: [],
            apiUrl: 'http://127.0.0.1:8000/api/sponsored'
        }
    },
    methods: {
        getSponsoredProperties() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    console.log('Appartamenti sponsorizzati', response.data.result);
                    this.sponsoredList = response.data.result;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

        }
    },
    props: {
        withShow: {
            required: false,
            type: Boolean,
        }
    },
    created() {
        this.getSponsoredProperties();
    }
}
</script>

<template>

    <section class="sponsored-properties container">
        <div class="row d-flex justify-content-center">
            <PropertiesListItem class="card col-2 mx-3 mt-5 text-black" v-for="sponsoredProperty in sponsoredList"
                :key="sponsoredProperty.id" :propertyObj="sponsoredProperty" />
        </div>
    </section>


</template>

<style scoped lang="SCSS">

</style>