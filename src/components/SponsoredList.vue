<script>

import axios from 'axios';

export default {
    name: 'SponsoredList',
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
                    console.log(response.data.result);
                    this.sponsoredList = response.data.result;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

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
            <div class="card col-2 mx-3 mt-5" v-for="sponsoredProperty in sponsoredList" :key="sponsoredProperty.id">
                <div class="card-body">
                    <img :src="`http://127.0.0.1:8000/storage/${sponsoredProperty.thumb_url}`" class="card-img-top mb-3"
                        alt="...">
                    <h5 class="card-title px-3 text-center">{{ sponsoredProperty.title }}</h5>
                    <p class="card-text px-3 mt-2 text-center">{{ sponsoredProperty.address }}</p>
                    <!-- <p class="card-text px-3 mt-2 text-center">This property is {{
                            sponsoredProperty.distance.toFixed(2) }}km from the place you searched</p> -->
                    <p class="card-text px-3 text-center">
                        <i class="fa-solid fa-house"></i> Rooms: {{ sponsoredProperty.rooms }} -
                        <i class="fa-solid fa-bed"></i> Beds: {{ sponsoredProperty.beds }}
                    </p>
                    <p class="card-text px-3 text-center"><i class="fa-solid fa-bath"></i> Bathrooms: {{
                        sponsoredProperty.bathrooms }}</p>
                    <p class="card-text px-3 text-center">
                        <i class="fa-solid fa-arrows-up-down-left-right"></i> Square meters: {{
                            sponsoredProperty.square_meters }} mq
                    </p>
                </div>
            </div>
        </div>
    </section>


</template>

<style scoped lang="SCSS">

</style>