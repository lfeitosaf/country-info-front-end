import { Link } from "react-router-dom";

interface iCountryCard {
    countryCode: string;
    name: string;
}


export const CountryCard = ( { name, countryCode } : iCountryCard): JSX.Element =>{


    return (
        <Link to={`/country/${name}/${countryCode}`} className="flex items-center justify-center cursor-pointer h-[50px] bg-black text-white w-[250px] max-lg:w-full rounded hover:bg-gray-600">
            <p>{ name }, {countryCode}</p>
        </Link>
    )
}