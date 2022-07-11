import axios from "axios";
import Cookies from "js-cookie"

const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.239/api/',
    timeout: 999999999,
    headers: { Authorization: 'Bearer ' + Cookies.get("authorizerToken")}
});

export default axiosInstance