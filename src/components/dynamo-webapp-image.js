import React from 'react'

import WebappMobileImage from '../images/webapp--mobile.svg'
import WebappLaptopImage from '../images/webapp--laptop.svg'


const DynamoWebappImage = () => {
    return (
        <section className='section--light-purple'>
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

export default DynamoWebappImage