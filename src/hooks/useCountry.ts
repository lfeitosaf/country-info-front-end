import { useState, useEffect } from "react";
import axios from "axios";

export const useCountry = (countryName: string | undefined, countryCode: string | undefined) => {
    const [countryFlag, setCountryFlag] = useState<any>(null);
    const [countryPopulation, setCountryPopulation] = useState<any>(null);
    const [borderCountries, setBorderCountries] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    interface PopulationData {
        year: number;
        value: number;
    }
    
    interface CountryPopulationResponse {
        country: string;
        populationCounts: PopulationData[];
    }

    useEffect(() => {
        const fetchCountryFlag = async () => {
            if (!countryName) return;
            setLoading(true);
            setError(null);
            try {
                const flagResponse = await axios.get(`http://localhost:3001/api/countries/flag/${countryName}`);
                setCountryFlag(flagResponse.data);
            } catch (err) {
                setError("Failed to fetch country data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        const fetchCountryPopulation = async () => {
            if (!countryName) return;
            setLoading(true);
            setError(null);
            try {
                const populationResponse = await axios.get<CountryPopulationResponse>(`http://localhost:3001/api/countries/population/${countryName}`);
                setCountryPopulation(populationResponse.data);
            } catch (err) {
                setError("Failed to fetch country data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        const fetchBorderCountries = async () => {
            if (!countryName) return;
            setLoading(true);
            setError(null);
            try {
                const borderResponse = await axios.get(`http://localhost:3001/api/countries/border/${countryCode}`);
                setBorderCountries(borderResponse.data);
            } catch (err) {
                setError("Failed to fetch country data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCountryPopulation()
        fetchCountryFlag();
        fetchBorderCountries()
    }, [countryName]);

    return { countryFlag, loading, error, countryPopulation, borderCountries,  };
};