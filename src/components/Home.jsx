import CountryInfo from "./CountryInfo"
import UserInfo from "./UserInfo"

const Home = ({ ipAndGeo, countryInfo }) => {
    

    // console.log('ig: ', ipAndGeo)

    return (
        <main className="container mx-auto px-4 text-gray-800">
            <div className="mb-6">
                <h2 className="text-center text-2xl font-semibold">I know almost everything about you 🫵</h2>
                <p className="text-gray-600 text-end">
                    <span>Success: {ipAndGeo.success ? "true" : "false"}</span><br />
                    <em>(Using a VPN is not fair play)</em>
                </p>
            </div>
            {ipAndGeo.success
                &&
                <div className="grid lg:grid-cols-2 gap-4">
                    <UserInfo ipAndGeo={ipAndGeo} />                    
                    <CountryInfo cData={countryInfo} />
                </div>
            }
        </main>
    )
}

export default Home