import { CountryList } from "../../components/CountryList"

export const HomePage = (): JSX.Element => {

    return(
        <div className="w-full flex justify-center items-center">
            <section className="flex justify-center items-center">
                <CountryList />
            </section>
        </div>
    )
}