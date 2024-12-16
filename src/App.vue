<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './js/store';
import { useRoute } from 'vue-router'
import axios from 'axios';




export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    getUserData(id) {
      axios.get("http://127.0.0.1:8000/api/user/" + id)
        .then((response) => {
          console.log('RITORNOOOOO', response.data.result)
          store.user_name = response.data.result.name;
          store.user_last_name = response.data.result.last_name;
          store.user_email = response.data.result.email;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);

    // Retrieve the 'auth' parameter
    const userId = urlParams.get('auth');
    const login = urlParams.get('login');

    if (userId) {
      console.log('User ID from slug:', userId);
      this.getUserData(userId);
    } else {
      store.user_name = 'Accedi';
      store.user_last_name = '';
      store.user_email = '';
    }
  }
}

</script>

<template>

  <AppHeader />
  <router-view />
  <AppFooter />

</template>

<style lang="scss">
@use "bootstrap/scss/bootstrap.scss" as *;
@use './styles/general.scss' as *;
</style>
