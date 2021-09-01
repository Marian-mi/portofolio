import React, { Children } from 'react'
import Particles from 'react-particles-js'
import { IOptions, RecursivePartial } from 'tsparticles'
import particleConfig from '../../Utils/particlesjs-config.json'
import './Wrappers.scss'


type Props = {
    children: JSX.Element | JSX.Element[]
    content: string
}

const config = particleConfig as RecursivePartial<IOptions>

const Section = ({ children, content }: Props) => {
    return (
        <section className={`section section__${content}`}>
            <Particles params={config} className="particles" />
            {children}
        </section>
    )
}

export default Section
