import React, { PureComponent } from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo'

test("CityInfo render", async () =>{
    // AAA
    // Arrange
    const city = "La Plata"
    const country = "Argentina"
    // Act
    const { findAllByRole } = render(<CityInfo city={city} country={country}></CityInfo>)
    
    // Assert
    // findAllByRole nos va a buscar todos los componentes que sean "heading" => h1, h2, h3, etc...
    // el resultado es un array de compnoentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    // Cuando el test va a ser correcto
    // Definiciòn
    // Cuando en el primer parametro (heading) se encuentre la ciudad "La Plata"
    // y cuando en el segundo parámetro se encuentre el pais Argentina

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

 
})