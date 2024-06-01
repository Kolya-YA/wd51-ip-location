import SectionHeader from "./SectionHeader"
import Map from "./Map"

const UserInfo = ({ ipAndGeo }) => {
    const lines = {
        "Your IP: ": ipAndGeo?.ip,
        "Continent: ": ipAndGeo?.continent,
        "Country: ": ipAndGeo?.country,
        "Flag: ": ipAndGeo?.flag?.emoji,
        "Region: ": ipAndGeo?.region,
        "City: ": ipAndGeo?.city,
        "Time: ": ipAndGeo?.timezone?.id,
        "ISP: ": ipAndGeo?.connection?.isp,
        "Latitude: ": ipAndGeo?.latitude,
        "Longitude: ": ipAndGeo?.longitude,
    }

    const InfoLine = ({text, data}) => data && <li><strong>{text}</strong> {data}</li>

    return (
        <section className="grid grid-rows-[auto_1fr]">
            <SectionHeader text="User Info" />
            <div className="grid md:grid-cols-2 lg:grid-cols-1 auto-rows-fr gap-4 p-4 bg-white shadow-lg rounded-lg">
                <ul>
                    {Object.entries(lines).map(([key, value]) => <InfoLine key={key} text={key} data={value} />)}
                </ul>
                <Map ipAndGeo={ipAndGeo} />
            </div>
        </section>
    )
}

export default UserInfo