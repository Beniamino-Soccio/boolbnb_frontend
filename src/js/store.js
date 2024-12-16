import { reactive } from "vue";
export const store = reactive({
    serverPath: "http://127.0.0.1:8000/",
    apiUrl: "http://127.0.0.1:8000/api/filter",
    apiUrlServices: "http://127.0.0.1:8000/api/admin/services",
    apiUrlviews: "http://127.0.0.1:8000/api/views",
    searchedBool: false,
    user_name: 'Accedi',
    user_last_name: '',
    user_email: '',
});