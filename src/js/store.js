import { reactive } from "vue";
export const store = reactive({
    apiUrlCheckUser: "http://127.0.0.1:8000/api/auth-check",
    apiUrl: "http://127.0.0.1:8000/api/filter",
    apiUrlServices: "http://127.0.0.1:8000/api/admin/services",
    searchedBool: false,
});