import React, { PureComponent } from 'react'
import CityList from './CityList'

export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Buenos Aires", country:"Argentina"},
    {city: "Santiago", country:"Chile"},
    {city: "Miami", country:"Estados Unidos"},
    {city: "Barcelona", country:"España"},
]

export const CityListExample = () => <CityList cities={cities} />