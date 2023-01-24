import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useQuery, useQueryClient } from "react-query";
import { getLocation } from "./store/api/ipAddress";
import * as L from "leaflet";
import Input from "./components/Input";
import bg from "./assets/pattern-bg.png";
function App() {
  const [count, setCount] = useState(0);
  const query = useQueryClient();
  const {
    isError,
    error,
    isLoading,
    data: ipLocation,
  } = useQuery("ip", getLocation);
  const locationCallback = (loc) => {
    //Spread the location from the ip api
    const { lat, lng } = loc;
    let initialMap = L.DomUtil.get("map");
    if (initialMap != null) {
      initialMap._leaflet_id = null;
    }

    let map = L.map("map", { zoomControl: false }).setView([lat, lng], 13);
    L.marker([lat, lng]).addTo(map);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,

      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
  };
  if (isLoading) {
    return <p>IsLoading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  locationCallback(ipLocation.location);
  return (
    <>
      <main
        className="main"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      >
        <Input />
        <section className="relative flex justify-center items-center">
          <div className="card">
            <p className="card-info">
              ip address
              <span>192.212.174.101</span>
            </p>
            <p className="card-info">
              ip address
              <span>192.212.174.101</span>
            </p>
            <p className="card-info">
              ip address
              <span>192.212.174.101</span>
            </p>
            <p className="card-info">
              ip address
              <span>192.212.174.101</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
