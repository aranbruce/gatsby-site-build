import React from 'react'

import WebappMobileImage from '../images/citysnapp-app-1--mobile.png'
import WebappLaptopImage from '../images/citysnapp-app-1--laptop.png'

const CitySnappWebappImage = () => {
    return (
        <section className='section--light-peach'>
            <div className='section__content no-padding-bottom no-padding-top'>
                <div className='project-image--mobile'>
                    <img src={WebappMobileImage} alt='Webapp on Mobile'/>
                </div>
                <div className='project-image--laptop'>
                    <img src={WebappLaptopImage} alt='Webapp on Laptop'/>
                </div>
            </div>
        </section>
    )
}

export default CitySnappWebappImage