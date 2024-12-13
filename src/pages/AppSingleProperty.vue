<script>
import axios from 'axios';

import AppPropertiesShow from '../components/AppPropertiesShow.vue';
import ModalButton from '../components/ModalButton.vue';

export default {
    name: "AppSingleProperty",
    components: {
        AppPropertiesShow,
        ModalButton,
    },
    data() {
        return {
            singleProperty: null,
            apiUrl: "http://127.0.0.1:8000/api/admin/properties"
        }
    },
    methods: {
        getSingleProperty() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`)
                .then((response) => {
                    console.log(response.data.results.id);
                    this.singleProperty = response.data.results;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getUserIp() {
            axios.get('https://api.ipify.org?format=json')
                .then((response) => {
                    console.log(response.data.ip);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        registerView(formData) {
            axios.post('store.apiUrlviews', formData)
                .then((response) => {
                    console.log('HO FATTO LA CHIAMATA', response.data.result);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.getSingleProperty();

        const userIp = this.getUserIp();
        const formData = {
            user_ip: userIp,
            property_id: this.$route.params.id
        }

        this.registerView(formData);
    },


}
</script>

<template>
    <div class="container">
        <AppPropertiesShow :propertyObj="singleProperty" />
        <ModalButton :propertyId="singleProperty.id" />
    </div>

</template>


<style scoped>
.container {
    margin: 100px auto;
}
</style>