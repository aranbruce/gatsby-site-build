import React from 'react'
import Layout from '../layouts/layout'
import WorkSection from '../components/work'
import SkillsSection from '../components/skills'
import AboutMeSection from '../components/about-me'
import GetInTouchSection from '../components/get-in-touch'

import HeaderImage from '../images/header--home-image.svg'


const IndexPage = () => {
    return (
        <Layout>
            <section className='section--home'>
                <div className='section__content-vertical-center flex'>
                    <div className='content--left'>
                        <h1 className='extra-margin-bottom'>Crafting Stunning Digital Experiences</h1>
                        <h4>Aran Bruce-Caddick</h4>
                    </div>
                    <div className='content--right'>
                        <img className='header--home-image' src={HeaderImage} alt='building sites'/>
                    </div>
                </div>
            </section>
            <WorkSection/>
            <SkillsSection/>
            <AboutMeSection/>
            <GetInTouchSection/>
        </Layout>
    )
}

export default IndexPage