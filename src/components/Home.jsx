const Home = ({ ipAndGeo }) => {
    const lines = {
        query: "Your IP: ",
        country: "Country: ",
        region: "Region: ",
        city: "City: ",
        district: "District: ",
        isp: "ISP: ",
        lat: "Latitude: ",
        lon: "Longitude: ",
        timezone: "Time: ",
        proxy: "VPN or Proxy: "
    }

    const InfoLine = ({text, data}) => data && <li>{text} {data}</li>

    return (
        <main className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold">I know almost everything about you 🫵</h2>
            <p>
                <span>VPN or Proxy: {ipAndGeo.proxy ? "true" : "false"}</span><br />
                <em>(Using a VPN is not fair play)</em>
            </p>
            <hr />
            {ipAndGeo.status === "success"
                &&
                <ul>
                    {Object.entries(lines).map(([key, value]) => <InfoLine key={key} text={value} data={ipAndGeo[key]} />)}
                </ul>
            }

        </main>
    )
}



export default Home
