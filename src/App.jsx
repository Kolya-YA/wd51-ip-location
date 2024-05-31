import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'

const App= () => {
  const [ipAndGeo, setIpAndGeo] = useState({})

  useEffect(() => {
    const fetchIpAndGeo = async() => {
      try {
        const resp = await axios.get('https://ipwho.is/')
        setIpAndGeo(resp.data)

        console.log('resp: ', resp)
      } catch (error) {
        console.error('Error: ', error)
      }
    }
    fetchIpAndGeo()
  }, [])

  return (
    <>
      <Header />
      <Home ipAndGeo={ipAndGeo} />
         
    </>
  )
}

export default App;
