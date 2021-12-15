import axios from "axios";

const URLBASE = 'http://localhost:3005/api/'
const serviceApi = axios.create(
    {
        baseURL : URLBASE,
    }
);
export default serviceApi;
