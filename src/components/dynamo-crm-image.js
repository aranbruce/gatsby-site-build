import React from 'react'

import CrmMobileImage from '../images/crm--mobile.svg'
import CrmLaptopImage from '../images/crm--laptop.svg'


const DynamoCrmImage = () => {
    return (
        <section className='section--light-yellow'>
            <div className='section__content no-padding-bottom no-padding-top'>
                <div className='project-image--mobile'>
                    <img src={CrmMobileImage} alt='CRM on Mobile'/>
                </div>
                <div className='project-image--laptop'>
                    <img src={CrmLaptopImage} alt='CRM on Laptop'/>
                </div>
            </div>
        </section>
    )
}

export default DynamoCrmImage