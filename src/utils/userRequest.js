import axios from "axios";
const userurl = "https://6593ca961493b0116069204e.mockapi.io/Sacrosssys";

const userRequest = axios.create({
  baseURL: userurl,
});


export default userRequest;


// future updation for attaching token in  Request Interceptor


// userRequest.interceptors.request.use(
//     () => {
//       const accessToken = getAccessTokenFromCookie();
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
