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
        <h5 class="card-title px-3 ">{{ propertyObj.title }} </h5>
        <p class="card-text px-3 mt-2"> {{ propertyObj.description }} </p>
        <!--<p class="card-text px-3 mt-2"> {{ propertyObj.address }} </p>
        <p class="card-text px-3 mt-3 fw-bold">Main Info:</p>
        <p class="card-text px-3"> <i class="fa-solid fa-house"></i> Rooms: {{ propertyObj.rooms }} </p>
        <p class="card-text px-3 "> <i class="fa-solid fa-bed"></i> Beeds: {{ propertyObj.beds }} </p>
        <p class="card-text px-3 "> <i class="fa-solid fa-bath"></i> Bathrooms: {{ propertyObj.bathrooms }} </p>
        <p class="card-text px-3 "> <i class="fa-solid fa-arrows-up-down-left-right"></i> Square meters: {{
            propertyObj.square_meters }} mq</p>

        <p class="card-text px-3 mt-4 fw-bold">Services:</p>
        <ul class="px-3">
            <li v-for="service in propertyObj.services" :key="service.id">
                <i :class="service.icon_url"></i>
                {{ service.name }}
            </li>
        </ul>-->
        <div class="mb-3 d-flex justify-content-center">
            <router-link class="linkstyle" :to="{ 'name': 'properties.show', params:{id:propertyObj.id} }">
                <button class="btnmodal">More info!</button>
            </router-link>
        </div>
        
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

.card-body {
    padding: 0;
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
  box-shadow: 0 8px 0 0 #0046d5;
  transition: all 0.1s ease-in-out;
  border-color: #0046d5;
}
.btnmodal:active {
  transform: translateY(10px);
  box-shadow: 0 0 0 0 #0046d5;
}
.linkstyle{
    color: #0046d5;
    text-decoration: none;
}
</style>
