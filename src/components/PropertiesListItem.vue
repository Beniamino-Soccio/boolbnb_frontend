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
    <div class="card col-4 mx-3 p-0">
        <div class="card-body mb-3">
            <img :src="`http://127.0.0.1:8000/storage/${propertyObj.thumb_url}`" class="card-img-top mb-3" alt="...">
            <h5 class="card-title px-3 text-center ">{{ propertyObj.title }} </h5>
            <p class="card-text px-3 mt-2 text-center"> {{ propertyObj.address }} </p>
            <p class="card-text px-3 mt-2 text-center"> This property is {{ propertyObj.distance.toFixed(2) }}km from the
                place you
                searched </p>
                <p class="card-text px-3 text-center"> <i class="fa-solid fa-house"></i> Rooms: {{ propertyObj.rooms }}  -  <i class="fa-solid fa-bed"></i> Beeds: {{ propertyObj.beds }}</p>
                <p class="card-text px-3 text-center"> <i class="fa-solid fa-bath"></i> Bathrooms: {{ propertyObj.bathrooms }}</p>
                <p class="card-text px-3 text-center"> <i class="fa-solid fa-arrows-up-down-left-right"></i> Square meters: {{ propertyObj.square_meters }} mq</p>
            <!--<p class="card-text px-3 mt-2"> {{ propertyObj.description }} </p>
            <p class="card-text px-3 mt-3 fw-bold">Main Info:</p>

            <p class="card-text px-3 mt-4 fw-bold">Services:</p>
            <ul class="px-3">
                <li v-for="service in propertyObj.services" :key="service.id">
                    <i :class="service.icon_url"></i>
                    {{ service.name }}
                </li>
            </ul>-->
            <div class="mb-3 d-flex justify-content-center">
                <router-link class="linkstyle" :to="{ 'name': 'properties.show', params: { id: propertyObj.id } }">
                    <button class="btnmodal">More info!</button>
                </router-link>
            </div>

        </div>
    </div>
    
</template>

<style scoped lang="scss">
h5 {
    cursor: pointer;
}

.card {
    max-width: 400px;
    margin-bottom: 30px;
    /* box-shadow: 10px 10px 5px #dedede; */
    border-color: #007bff;
}

img {
    max-width: 400px;
    max-height: 210px;
}

.card-body {
    padding: 0;
    max-width: 400px;
}

.btnmodal {
    background-color: white;
    padding: 5px 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    //   justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    box-shadow: 2px 6px 0 1px #007bff;
    transition: all 0.1s ease-in-out;
}

.btnmodal:active {
    transform: translateY(10px);
    box-shadow: 0 0 0 0 #0046d5;
}

.linkstyle {
    color: #000;
    text-decoration: none;
}
</style>
