<script>
import axios from 'axios';
import { store } from '../js/store.js'

import BasicFilter from '../components/BasicFilter.vue';

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    BasicFilter
  },
  methods: {
    sendSearchParametres() {
      const formData = {
        latitude: store.latitude,
        longitude: store.longitude,
        radius: store.radius
      }

      axios.post(store.apiUrl, formData)
        .then((response) => {
          console.log(response.data.result);
          store.property = response.data.result;
          store.searchedBool = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<template>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="fw-bold text-center">Home Page BoolBnb</h1>
      </div>
      <BasicFilter @propertyCall="sendSearchParametres" />
      <div class="col-12 py-5 text-center">
        <img src="/public/images/BoolBnb.png" alt="Logo BoolBnb">
      </div>
    </div>
  </div>

</template>

<style scoped></style>