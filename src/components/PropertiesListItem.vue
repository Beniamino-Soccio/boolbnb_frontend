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
    computed: {
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card me-3 mb-5">
            <div class="card-body">
                <h5 class="card-title">{{ propertyObj.title }} </h5>
                <p class="card-text"> {{ propertyObj.description }} </p>
                <p class="card-text"> N. di stanze: {{ propertyObj.rooms }} </p>
                <p class="card-text"> N. di letti: {{ propertyObj.beds }} </p>
                <p class="card-text"> N. di bagni: {{ propertyObj.bathrooms }} </p>
                <p class="card-text"> Grandezza appartamento: {{ propertyObj.square_meters }} mq</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h5 {
    cursor: pointer;
}
div.card:hover{
    background-color: #a8e2dd;
    color: #0e2a35;
}
.card:hover .card-body > h5{
    color: #000;
}
.card:hover .card-body > p{
    color: #000;
}
</style>