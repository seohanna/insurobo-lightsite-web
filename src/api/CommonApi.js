import axios from "axios";
const api_url=process.env.REACT_APP_API_URL; 

export const CommonApi = axios.create({
    baseURL: api_url,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        withCredentials: true
    }
 });
