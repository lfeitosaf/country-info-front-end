import { Link, useParams } from "react-router-dom";
import { useCountry } from "../../hooks/useCountry"; 
import { CountryCard } from "../../components/CountryCard";
import { PopulationChart } from "../../components/CountryPopulation";

export const CountryPage = (): JSX.Element => {
    const { countryName, countryCode } = useParams<{ countryName: string, countryCode: string }>();
    const { countryFlag, countryPopulation, borderCountries, loading, error } = useCountry(countryName, countryCode);

    if (loading) {
        return <p>Loading...</p>;
    }

    const bordersList = borderCountries.borders

    return (
        <main className="w-full flex items-center flex-col text-white max-lg:px-4 pb-[100px]">
            <section className="flex justify-center w-full max-w-screen-xl items-center flex-col max-lg:px-4 gap-4 mt-[150px]">
            <Link to={'/'} className="self-start font-semibold">Back</Link>
            {error ? (
                <p>{error}</p>
            ) : countryFlag ? (
                <img src={countryFlag} alt={`Bandeira de ${countryName}`} className="w-[400px] h-auto"/>
            ) : (
                <p>Flag not found.</p>
            )}

            <h1 className="text-[50px] max-lg:text-xl">Informations of the country: {countryName}, {countryCode}</h1>

            </section>

            <section className="max-w-screen-xl w-full mt-10">
                <h2 className="text-lg font-semibold">Countries that border {countryName}:</h2>
                <ul className="grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-1">
                    {bordersList.length ? bordersList.map((country, i)=>( <CountryCard key={i} name={country.commonName} countryCode={country.countryCode}/>))
                     : <p>This country has no borders.</p>}
                </ul>
            </section>

            <section className="max-w-screen-xl w-full mt-10 bg-[#181818]">
                <div className="" >
                {countryPopulation?.populationCounts.length ? (
                    <PopulationChart populationData={countryPopulation.populationCounts} />)
                     : <p>No population data available.</p>
                    }
                </div>
            </section>
        </main>
    );
};