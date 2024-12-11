<script>
export default {
    name: "AppPropertiesShow",
    data() {
        return {

        }
    },
    props: {
        propertyObj: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <div class="card-body">
        <h5 class="card-title mb-5 fs-1">{{ propertyObj.title }} </h5>
        <div class="address mb-4">
            <i class="fa-solid fa-location-dot"></i>
            <p class="card-text px-3 mt-4 "> {{ propertyObj.address }} </p>
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

        <div class="d-flex justify-content-end">
            <i class="fa-solid fa-question question"></i>
            <p>For any questions you can contact the host through the appropriate section</p>
        </div>


    </div>
</template>

<style scoped lang="scss">
img {
    max-width: 600px;
    max-height: 410px;
}

.address p {
    display: inline;
}

i {
    font-size: 24px;
    margin-right: 15px;
}
</style>
