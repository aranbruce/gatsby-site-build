import React from 'react'

import WebsiteMobileImage from '../images/website--mobile.svg'
import WebsiteLaptopImage from '../images/website--laptop.svg'



const DynamoWebsite = () => {
    return (
        <section className='section--aqua'>
            <div className='section__content no-padding-bottom no-padding-top'>
                <div className='project-image--mobile'>
                    <img src={WebsiteMobileImage} alt='Website on Mobile'/>
                </div>
                <div className='project-image--laptop'>
                    <img src={WebsiteLaptopImage} alt='Website on Laptop'/>
                </div>
            </div>
        </section>
    )
}

export default DynamoWebsite