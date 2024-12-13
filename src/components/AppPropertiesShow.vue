<script>
import { important } from '../js/important';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

export default {
    name: "AppPropertiesShow",
    data() {
        return {

        }
    },
    methods: {
        createMap() {
            let center = [this.propertyObj.longitude, this.propertyObj.latitude];

            const map = tt.map({
                key: important.apiKey,
                container: "map",
                center: center,
                zoom: 10,
            });

            const popupOffsets = {
                top: [0, 0],
                bottom: [0, -35],
                "bottom-right": [0, -70],
                "bottom-left": [0, -70],
                left: [25, -35],
                right: [-25, -35],
            }

            const popup = new tt.Popup({ offset: popupOffsets }).setHTML(
                "<b>" + this.propertyObj.title + "</b>" + "<br>" + this.propertyObj.address
            )
            const marker = new tt.Marker().setLngLat(center).addTo(map);

            marker.setPopup(popup).togglePopup()
        }
    },
    props: {
        propertyObj: {
            type: Object,
            required: true,
        },
    },
    mounted() {
        this.createMap();
    },
}
</script>

<template>
    <div class="card-body">
        <h5 class="card-title mb-5 fs-1">{{ propertyObj.title }} </h5>
        <div class="address mb-4">
            <i class="fa-solid fa-location-dot"></i>
            <p class="card-text px-3"> {{ propertyObj.address }} </p>
        </div>
        <div class="d-flex">
            <img :src="`http://127.0.0.1:8000/storage/${propertyObj.thumb_url}`" class="card-img-top mb-3 rounded"
                alt="...">
            <div class="ms-5">
                <p class="card-text mt-4 fw-bold">Our Services:</p>
                <ul class="list-group">
                    <li class="mb-2" v-for="service in propertyObj.services" :key="service.id">
                        <i :class="service.icon_url"></i>
                        {{ service.name }}
                    </li>
                </ul>
                <p v-for="sponsorship in propertyObj.sponsorships"> Sponsorship:
                    <i class="fa-solid fa-star"></i> {{ sponsorship.name }}
                </p>
            </div>
        </div>

        <div>
            <h4>Description:</h4>
            <p class="card-text mt-4"> {{ propertyObj.description }} </p>
        </div>


        <p class="card-text mt-3 fw-bold">Main info about the property:</p>
        <p class="card-text"> <i class="fa-solid fa-house"></i> Rooms: {{ propertyObj.rooms }} </p>
        <p class="card-text"> <i class="fa-solid fa-bed"></i> Beeds: {{ propertyObj.beds }} </p>
        <p class="card-text"> <i class="fa-solid fa-bath"></i> Bathrooms: {{ propertyObj.bathrooms }} </p>
        <p class="card-text"> <i class="fa-solid fa-arrows-up-down-left-right"></i> Square meters: {{
            propertyObj.square_meters }} mq</p>

        <section id="map-property" class="my-5">
            <h3 class="ms-4 mb-3">Where you’ll be</h3>
            <div id="map"></div>
        </section>

        <div class="d-flex justify-content-end">
            <i class="fa-solid fa-question question"></i>
            <p>For any questions you can contact the host through the appropriate section</p>
        </div>


    </div>
</template>

<style scoped lang="scss">
#map-property {
    text-align: center;


    #map {
        border-radius: 10px;
        margin: 0 auto;
        width: 70%;
        min-height: 500px;
    }
}

img {
    max-width: 600px;
    max-height: 410px;
}

.address p {
    display: inline;
}

i {
    font-size: 24px;
    margin-right: 10px;
}
</style>
