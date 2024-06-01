import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'

const Map = ({ ipAndGeo }) => {
    // const map = useMap();
    // console.log('map center:', map.getCenter())
    const position = [ipAndGeo?.latitude, ipAndGeo?.longitude]
    
    console.log('Position',position);

    return (
        <section className="">
            <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </section>
    )
}

export default Map;