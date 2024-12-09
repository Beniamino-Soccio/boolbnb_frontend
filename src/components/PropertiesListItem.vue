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
    <div class="card-body pb-3">
        <img :src="`http://127.0.0.1:8000/storage/${propertyObj.thumb_url}`" class="card-img-top mb-3" alt="...">
        <h5 class="card-title px-3">{{ propertyObj.title }} </h5>
        <p class="card-text px-3"> {{ propertyObj.description }} </p>
        <p class="card-text px-3"> N. of rooms: {{ propertyObj.rooms }} </p>
        <p class="card-text px-3"> N. of beds: {{ propertyObj.beds }} </p>
        <p class="card-text px-3"> N. of bathrooms: {{ propertyObj.bathrooms }} </p>
        <p class="card-text px-3"> Square meters: {{ propertyObj.square_meters }} mq</p>
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
}
</style>