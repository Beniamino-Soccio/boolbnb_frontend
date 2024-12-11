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
    },
    created() {
        this.getSingleProperty();
    },
    // computed:{
    //     loaded(){
    //         return this.singlePost !== null;
    //     }
    // }


}
</script>

<template>
    <div class="container">
        <AppPropertiesShow :propertyObj="singleProperty" />
        <ModalButton />
    </div>

</template>


<style scoped>
.container {
    margin: 100px auto;
}
</style>