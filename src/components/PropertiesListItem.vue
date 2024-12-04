<script>
export default {
    name: "PropertiesListItem",
    data() {
        return {
        
        }
    },
    props: {
        propertyObject : {
            type: object,
            required: true,
        },
    },
    computed:{
    }
}
</script>

<template>
    <div class="col-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ propertyObject.title }} </h5>
                <p class="card-text"> {{ propertyObject.description }} </p>
                <p class="card-text"> N. di stanze: {{ propertyObject.rooms }} </p>
                <p class="card-text"> N. di letti: {{ propertyObject.beds }} </p>
                <p class="card-text"> N. di bagni: {{ propertyObject.bathrooms }} </p>
                <p class="card-text"> Grandezza appartamento: {{ propertyObject.square_meters }} mq</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>