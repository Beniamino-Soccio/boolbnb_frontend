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
    <div class="col-6">
        <div class="card">
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

<style scoped></style>