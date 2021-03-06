import React from 'react'
import PropTypes from 'prop-types'
import CityInfo from '../CityInfo'
import Weather from '../weather'

const renderCityAndCountry = cityAndCountry => {
    const { city, country } = cityAndCountry

    return (
        <li key={city}>
            <CityInfo city={city} country={country}/>
            <Weather temperature={18} state="sunny"/>
        </li>
    )
}

const CityList = ({ cities }) => {
    return (
        <ul>
            {
                cities.map(cityAndCountry => renderCityAndCountry(cityAndCountry))
            }
        </ul>
    )
}

CityList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default CityList
