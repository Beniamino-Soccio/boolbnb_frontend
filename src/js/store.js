import { reactive } from "vue";
export const store = reactive({
    latitude: '',
    longitude: '',
    radius: 20,
    beds: 1,
    rooms: 1,
    apiUrl: "http://127.0.0.1:8000/api/filter",
    property: [],
    searchedBool: false,
});