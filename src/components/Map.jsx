import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from 'react-leaflet'

const Map = ({ ipAndGeo }) => {
    const position = [ipAndGeo?.latitude, ipAndGeo?.longitude]
    console.log("Position MAP", position)
    return (
        <div>
            <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default Map;