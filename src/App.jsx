import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'

const geoIpApi = 'https://ipwho.is/'
const countriInfoApi = 'https://restcountries.com/v3.1/name/'

const App= () => {
  const [ipAndGeo, setIpAndGeo] = useState({})
  const [countryInfo, setCountryInfo] = useState({})

  useEffect(() => {
    const fetchIpAndGeo = async () => {
      try {
        const resp = await axios.get(geoIpApi)
        setIpAndGeo(resp.data)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchIpAndGeo()
  }, [])

  useEffect(() => {
    const fetchCountryInfo = async () => {      
      const countryName = ipAndGeo?.country.toLowerCase()
      try {
        const resp = await axios.get(`${countriInfoApi}${countryName}`)
        setCountryInfo(resp.data[0])
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchCountryInfo(setCountryInfo)
  }, [ipAndGeo.country])

  return (
    <>
      <Header />
      <Home ipAndGeo={ipAndGeo} countryInfo={countryInfo} />
         
    </>
  )
}

export default App;
