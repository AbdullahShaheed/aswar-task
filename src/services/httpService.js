import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(null, (error) => {
  if (error.response && error.response.status >= 500) {
    console.log("Logging the error: ", error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

function setToken(token) {
  axios.defaults.headers.common["x-auth-token"] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken,
};
