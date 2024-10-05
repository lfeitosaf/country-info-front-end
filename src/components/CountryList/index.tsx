import { useContext, useEffect } from "react"
import { CountryContext } from "../../providers/CountryContext"
import { CountryCard } from "../CountryCard"

export const CountryList = (): JSX.Element => {

    const { countryList, loadCountries } = useContext(CountryContext)

    useEffect(() => {
        loadCountries();
    }, [loadCountries]);

    return(
        <main className="w-full h-screen flex items-center flex-col">
            <section className="flex justify-center w-full max-w-screen-xl items-center flex-col max-lg:px-4 gap-4 mt-[100px]">
                <h1 className="text-white text-xl max-lg:text-center max-lg:text-base">Click on a country to see its information.</h1>
                <ul className="grid grid-cols-4 gap-2 max-lg:grid-cols-1">
                    {countryList.length ? countryList.map((country, i)=>( <CountryCard key={i} name={country.name} countryCode={country.countryCode}/>)) : null}
                </ul>
            </section>
        </main>
    )
}