import React from 'react'

import WebsiteMobileImage from '../images/citysnapp-website--mobile.svg'
import WebsiteLaptopImage from '../images/citysnapp-website--laptop.png'


const CitySnappWebsiteImage = () => {
    return (
        <section className='section--light-peach'>
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

export default CitySnappWebsiteImage