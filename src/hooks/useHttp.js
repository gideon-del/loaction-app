import { useQuery, useQueryClient } from "react-query";
import { getLocation, getLocationByIp } from "../store/api/ipAddress";

const useHttp = (ip) => {
    const query = useQueryClient();
    const {
      isError,
      error,
      isLoading,
      data: ipLocation,
    } = ip ? useQuery("ip", getLocation) : useQuery(['ip', ip], () => getLocationByIp(ip));
       
    return {
        isError,
        error,
        isLoading,
        ipLocation
    }
}