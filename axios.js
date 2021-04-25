import axios from "axios";    // axios is used for APIs

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-88670/us-central1/api"    // The API {cloud function} URL
});

export default instance;

// firebase emulators:start