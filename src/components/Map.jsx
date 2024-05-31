import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ ipAndGeo }) => {
    // const map = useMap();
    // console.log('map center:', map.getCenter())
    const position = [ipAndGeo?.latitude, ipAndGeo?.longitude]
    
    console.log('Position',position);

    return (
        <section className="">
            <h2>Map</h2>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </section>
    )
}

export default Map;