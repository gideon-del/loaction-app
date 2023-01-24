import axios from "axios";
const apiKey = import.meta.env.VITE_APIKEY
const ipApi = axios.create({
    baseURL:`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}`
})

export const getLocation = async () => {
    const res = await ipApi.get();
    return res.data
}
export const getLocationByIp = async (ip) => {
    const res = await ipApi.get(`&ipAddress=${ip}`)
    return res
}

export default ipApi