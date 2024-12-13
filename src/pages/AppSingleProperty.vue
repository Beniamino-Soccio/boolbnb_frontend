<script>
import axios from 'axios';
import { store } from '../js/store.js';

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
            userIp: '',
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
                    this.userIp = response.data.ip;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        registerView(formData) {

            console.log('CHIAMATA AXIOS', formData);

            axios.post(store.apiUrlviews, formData)
                .then((response) => {
                    console.log('HO FATTO LA CHIAMATA', response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.getSingleProperty();

    },
    mounted() {
        setTimeout(() => {
            axios.get("https://api.ipify.org?format=json")
                .then((response) => {
                    console.log(response.data.ip)
                    const ipAddress = response.data.ip;
                    axios.post("http://127.0.0.1:8000/api/views", {
                        property_id: this.singleProperty.id,
                        user_ip: ipAddress,
                    })
                        .then((response) => {
                            console.log('CHIAMATA AXIOS STORE', response.data);
                        })
                        .catch((error) => {
                        });
                })
                .catch((error) => {
                });
        }, 2000);

    },
};

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