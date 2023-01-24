const useLeaflet = (loc) => {
    const locationCallback = () => {
        //Spread the location from the ip api
        const { lat, lng } = loc;
        let initialMap = L.DomUtil.get("map");
        if (initialMap != null) {
          initialMap._leaflet_id = null;
        }
    
        let map = L.map("map").setView([lat, lng], 13);
        L.marker([lat, lng]).addTo(map);
        L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
      };
      locationCallback()
}