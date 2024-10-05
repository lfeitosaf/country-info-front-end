import { Route, Routes} from 'react-router-dom'
import { CountryPage } from '../pages/CountryPage'
import { HomePage } from '../pages/HomePage'

export const Routed = (): JSX.Element => {
    return(
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/country/:countryName/:countryCode' element={<CountryPage />} />
    </Routes>
    )

}