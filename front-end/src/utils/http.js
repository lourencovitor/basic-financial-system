import axios from "axios";
import { getAccessToken, setAccessToken } from "./helpers";

const codes = [413, 401, 409, 400, 403, 404, 500];

const validateStatus = (status) =>
  (status >= 200 && status < 300) || codes.includes(status);

const setToken = (config) => {
  const accessToken = getAccessToken();
  const headers = `Bearer ${accessToken}`;
  config.headers.Authorization = headers;
  return config;
};

// function setInsufficientScope() {
//   return { type: INSUFFICIENT_SCOPE, status: true };
// }

// const transformResponse = axios.defaults.transformResponse.concat((data) => {
//   if (data.statusCode && data.statusCode === HTTP_CODES.INSUFFICIENT_SCOPE) {
//     store.dispatch(setInsufficientScope());
//   }

//   return data;
// });

const backendClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  validateStatus,
  withCredentials: false,
});

backendClient.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      setAccessToken();
    }
    return response;
  },
  (error) => {
    console.error(error.message);
    throw new Error(error.message);
  }
);

backendClient.interceptors.request.use(setToken);

export { backendClient };
