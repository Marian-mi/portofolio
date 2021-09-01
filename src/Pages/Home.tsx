import React from 'react'
import Intro from '../Components/Cards/Intro'
import Section from '../Components/Wrappers/Section'


const Home = () => {
    return (
        <div className="home">
            <Section content="center">
                <Intro />
            </Section>
        </div>
    )
}

export default Home
