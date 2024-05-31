import Map from "./Map"

const Home = ({ ipAndGeo }) => {
    const lines = {
        "Your IP: ": ipAndGeo?.ip,
        "Continent: ": ipAndGeo?.continent,
        "Country: ": ipAndGeo?.country,
        "Borders: ": ipAndGeo?.borders,
        "Flag: ": ipAndGeo?.flag?.emoji,
        "Region: ": ipAndGeo?.region,
        "City: ": ipAndGeo?.city,
        "Time: ": ipAndGeo?.timezone?.id,
        "ISP: ": `${ipAndGeo?.connection?.isp} — ${ipAndGeo?.connection?.org}`,
        "Latitude: ": ipAndGeo?.latitude,
        "Longitude: ": ipAndGeo?.longitude,
    }

    const InfoLine = ({text, data}) => data && <li>{text} {data}</li>

    // console.log('ig: ', ipAndGeo)

    return (
        <main className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold">I know almost everything about you 🫵</h2>
            <p>
                <span>Success: {ipAndGeo.success ? "true" : "false"}</span><br />
                <em>(Using a VPN is not fair play)</em>
            </p>
            <hr />
            {ipAndGeo.success
                &&
                <div className="grid grid-cols-2 gap-4">
                <ul>
                    {Object.entries(lines).map(([key, value]) => <InfoLine key={key} text={key} data={value} />)}
                </ul>

                <Map ipAndGeo={ipAndGeo} />
                </div>
            }
        </main>
    )
}

export default Home