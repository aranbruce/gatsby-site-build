import React from 'react'

import AboutMeImage from '../images/about-me.svg'

const AboutMeSection = () => {
    return(
        <section className='section--grey' id={'about-me'}>
            <div className='section__content flex'>
                <div className='content--large'>
                    <img src={AboutMeImage} alt='About Me'/>
                </div>
                <div className='content--small'>
                    <div className='section__title'>
                        <h5>A Bit</h5>
                        <h2>About Me</h2>
                    </div>
                    <p>Hello, I'm Aran</p>
                    <p>
                        I work and live in London. I specialise in  <strong>developing</strong> and <strong>executing</strong> creative <strong>projects</strong> across <strong>digital</strong> mediums. I complement a background in <strong>product management</strong> with strong <strong>marketing</strong>, creative, and <strong>technical</strong> development skills.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMeSection