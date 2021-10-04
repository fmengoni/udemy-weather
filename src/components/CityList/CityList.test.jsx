import React, { PureComponent } from 'react'
import { render } from '@testing-library/react'
import CityList from '.'

const cities = [
    {city: "Buenos Aires", country:"Argentina"},
    {city: "Santiago", country:"Chile"},
    {city: "Miami", country:"Estados Unidos"},
    {city: "Barcelona", country:"España"},
]

test("CityList render", async () =>{
    // AAA Arrage Act Assert
 
    const { findAllByRole } = render(<CityList cities={cities}></CityList>)

    const items = await findAllByRole("listitem")

    expect(items).toHaveLength(4)
})