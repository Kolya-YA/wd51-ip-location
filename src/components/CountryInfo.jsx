import { useState } from 'react'
import SectionHeader from './SectionHeader';

const CountryInfo = ({ cData }) => {

const [showTranslations, setShowTranslations] = useState(false);

  const toggleTranslations = () => {
    setShowTranslations(!showTranslations);
  };

    // console.log('cData', cData)

    return (
        <section className="grid grid-rows-[auto_1fr]">
            <SectionHeader text="Country Info" />
            {cData?.flags && (
                <div className="p-4 bg-white shadow-lg rounded-lg text-pretty">
                    <div className="flex items-center gap-2 mb-4">
                        <h1 className="text-2xl font-bold">{cData.name.common}</h1>
                        <img src={cData.flags.png} alt={cData.flags.alt} className="w-20 h-20 object-contain" />
                        <img src={cData.coatOfArms.png} alt="Coat of Arms" className="w-20 h-20 object-contain" />
                    </div>
                    <p><strong>Official Name:</strong> {cData.name.official}</p>
                    <p><strong>Native Name:</strong> {cData.name.nativeName.deu.official} ({cData.name.nativeName.deu.common})</p>
                    <p><strong>Capital:</strong> {cData.capital.join(', ')}</p>
                    <p><strong>Region:</strong> {cData.region}</p>
                    <p><strong>Subregion:</strong> {cData.subregion}</p>
                    <p><strong>Population:</strong> {cData.population.toLocaleString()}</p>
                    <p><strong>Area:</strong> {cData.area.toLocaleString()} km²</p>
                    <p><strong>Currency:</strong> {cData.currencies.EUR.name} ({cData.currencies.EUR.symbol})</p>
                    <p><strong>Languages:</strong> {Object.values(cData.languages).join(', ')}</p>
                    <p><strong>Gini Index (2016):</strong> {cData.gini[2016]}</p>
                    <p><strong>Timezones:</strong> {cData.timezones.join(', ')}</p>
                    <p><strong>Borders:</strong> {cData.borders.join(', ')}</p>
                    <p><strong>Top Level Domain (TLD):</strong> {cData.tld.join(', ')}</p>
                    <p><strong>Start of the Week:</strong> {cData.startOfWeek.charAt(0).toUpperCase() + cData.startOfWeek.slice(1)}</p>
                    <div className="mt-4">
                        <a href={cData.maps.openStreetMap} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">View on OpenStreetMap</a>
                    </div>
                    <div className="mt-4">
                        <button onClick={toggleTranslations} className="text-blue-500 hover:underline">
                        {showTranslations ? 'Hide Translations' : 'Show Translations'}
                        </button>
                        {showTranslations && (
                        <ul className="mt-2 list-disc list-inside">
                            {Object.entries(cData.translations).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.toUpperCase()}:</strong> {value.official} ({value.common})
                            </li>
                            ))}
                        </ul>
                        )}
                    </div>
                </div>
            )} 
        </section>
    )
}

export default CountryInfo