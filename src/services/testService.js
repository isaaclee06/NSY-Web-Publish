import axios from "axios";
// import * as serviceHelpers from "./serviceHelpers";

//const endpoint = `${serviceHelpers.API_HOST_PREFIX}/api/admin`;
const endpoint = "https://1s6os64m2g.execute-api.us-west-1.amazonaws.com/Prod";



let testFreeEndpoint = () => {
    const config = {
        method: "Get",
        url: `https://catfact.ninja/fact`,
        crossdomain: true,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
    }

    return axios.get(config.url);
    //return axios(config)
};

let testEndpoint = () => {
    const config = {
        method: "Get",
        url: `${endpoint}/test`,
        crossdomain: true,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
    }

    return axios.get(config.url);
    //return axios(config)
};

let testPostEndpoint = (payload) => {
    const config = {
        method: "Post",
        url: `${endpoint}`,
        data: payload,
        crossdomain: true,
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
    }

    return axios.post(config.url, payload);
    //return axios(config)
    // .then(serviceHelpers.onGlobalSuccess)
    // .catch(serviceHelpers.onGlobalError)
};

// let getAdminCounts = () => {
//   const config = {
//     method: "Get",
//     url: `${endpoint}/count`,
//     crossdomain: true,
//     withCredentials: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config)
//     .then(serviceHelpers.onGlobalSuccess)
//     .catch(serviceHelpers.onGlobalError);
// };

// let getPaginatedProfiles = (pageIndex, pageSize) => {
//   const config = {
//     method: "GET",
//     url: `${serviceHelpers.API_HOST_PREFIX}/api/admin/profiles?pageIndex=${pageIndex}&pageSize=${pageSize}`,
//     crossdomain: true,
//     withCredentials: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config)
//     .then(serviceHelpers.onGlobalSuccess)
//     .catch(serviceHelpers.onGlobalError);
// };

// let userProfileSearch = (query, pageIndex, pageSize) => {
//   const config = {
//     method: "GET",
//     url: `${serviceHelpers.API_HOST_PREFIX}/api/admin/profiles/search?query=${query}&pageIndex=${pageIndex}&pageSize=${pageSize}`,
//     crossdomain: true,
//     withCredentials: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config)
//     .then(serviceHelpers.onGlobalSuccess)
//     .catch(serviceHelpers.onGlobalError);
// };

// let setUserStatusId = (payload) => {
//   const config = {
//     method: "PUT",
//     url: `${endpoint}/status`,
//     data: payload,
//     crossdomain: true,
//     withCredentials: true,
//     headers: { "Content-Type": "application/json" },
//   };

//   return axios(config)
//     .then(serviceHelpers.onGlobalSuccess)
//     .catch(serviceHelpers.onGlobalError);
// };

export default {
    testEndpoint,
    testPostEndpoint,
    testFreeEndpoint
};