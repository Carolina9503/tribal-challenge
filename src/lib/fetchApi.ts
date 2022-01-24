
import axios from "axios";

const fetchApi = axios.create({
    baseURL:process.env.REACT_APP_API_URL
})
fetchApi.interceptors.request.use(
    (config) => ({
      ...config,
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY,
      },
    }),
    (error) => Promise.reject(error)
  );
  export default fetchApi
