import React from 'react'

import Layout from '../layouts/layout'
import HomeHero from '../components/home-hero'
import WorkSection from '../components/work'
import SkillsSection from '../components/skills'
import AboutMeSection from '../components/about-me'
import GetInTouchSection from '../components/get-in-touch'


const IndexPage = () => {
    return (
        <Layout>
            <HomeHero/>
            <WorkSection/>
            <SkillsSection/>
            <AboutMeSection/>
            <GetInTouchSection/>
        </Layout>
    )
}

export default IndexPage