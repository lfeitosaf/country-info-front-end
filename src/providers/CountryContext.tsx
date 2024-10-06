import axios from "axios";
import { createContext, PropsWithChildren, useState } from "react";

type Country = {
    countryCode: string;
    name: string
}

interface CountryContext {
    countryList: Country[],
    loadCountries(): void
    countryFlag: any;
    setCountryFlag: any;
}

export const CountryContext = createContext({} as CountryContext)

export const CountryProvider = ({ children }: PropsWithChildren): JSX.Element =>{
    const [countryList, setCountryList] = useState<Country[]>([])
    const [countryFlag, setCountryFlag] = useState<any | null> (null)

    const loadCountries = async () =>{
        try {
            const response = await axios.get('http://localhost:3001/api/countries')
            const countries = response.data
            setCountryList(countries)
        } catch (error) {
            console.log(error)
        }
    }

    return <CountryContext.Provider value={{countryList, loadCountries, countryFlag, setCountryFlag}}>{children}</CountryContext.Provider>
}