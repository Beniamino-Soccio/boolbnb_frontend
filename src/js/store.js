import { reactive } from "vue";
export const store = reactive({
    latitude: '',
    longitude: '',
    radius: 20,
    apiUrl: "http://127.0.0.1:8000/api/filter"
});