<script>
export default {
    name: "PropertiesListItem",
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
        <img :src="`http://127.0.0.1:8000/storage/${propertyObj.thumb_url}`" class="card-img-top mb-3" alt="...">
        <h5 class="card-title px-3 mt-3">{{ propertyObj.title }} </h5>
        <p class="card-text px-3 mt-4"> {{ propertyObj.description }} </p>
        <p class="card-text px-3 mt-4"> {{ propertyObj.address }} </p>
        <p class="card-text px-3 mt-3 fw-bold">Main Info:</p>
        <p class="card-text px-3"> <i class="fa-solid fa-house"></i> Rooms: {{ propertyObj.rooms }} </p>
        <p class="card-text px-3 "> <i class="fa-solid fa-bed"></i> Beeds: {{ propertyObj.beds }} </p>
        <p class="card-text px-3 "> <i class="fa-solid fa-bath"></i> Bathrooms: {{ propertyObj.bathrooms }} </p>
        <p class="card-text px-3 "> <i class="fa-solid fa-arrows-up-down-left-right"></i> Square meters: {{ propertyObj.square_meters }} mq</p>
        
        <p class="card-text px-3 mt-4 fw-bold">Services:</p>
        <ul class="px-3">
            <li v-for="service in propertyObj.services" :key="service.id">
                <i :class="service.icon_url"></i> 
                {{ service.name }}
            </li>
        </ul>
    </div> 
</template>

<style scoped lang="scss">
h5 {
    cursor: pointer;
}

.card:hover .card-body>h5 {
    color: #000;
}

.card:hover .card-body>p {
    color: #000;
}

img {
    max-width: 400px;
    max-height: 210px;
}

.card-body{
    padding: 0;
}
</style>
