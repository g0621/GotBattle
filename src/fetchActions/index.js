import axios from 'axios';
import ServerUrl from "./urlHelper";
const axiosInstance = axios.create({
    baseURL: ServerUrl,
    timeout: 3000
});

export const getAllBattle = async () => {
    return await axiosInstance
        .get('/')
        .then(response => response.data)
        .catch(err => {throw err})
}

export const getBattleByLocation = async (location) => {
    return await axiosInstance
        .get(`/search?location=${location}`)
        .then(response => response.data)
        .catch(err => {throw err});
}

export const getAllLocations = async () => {
    return await axiosInstance
        .get('/list')
        .then(response => response.data)
        .catch(err => {throw err});
}

export const getLocationsStartWith = async  (initials) => {
    return await axiosInstance
        .get(`/locStartsWith?initials=${initials}`)
        .then(response => response.data)
        .catch(err => {throw err});
}
