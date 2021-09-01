import { faList, faListAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Cards.scss'

const Intro = () => {
    return (
        <div className="introCard">
            <h1>Hello There, Welcome!</h1>
            <div className="introCard__image">
                <div className="introCard__links">
                    <FontAwesomeIcon icon={faList} />
                    <span>Projects</span>
                </div>
                <div className="introCard__links">
                    <FontAwesomeIcon icon={faList} />
                    <span>Projects</span>
                </div>
                <div className="introCard__links">
                    <FontAwesomeIcon icon={faList} />
                    <span>Projects</span>
                </div>
                <div className="introCard__links">
                    <FontAwesomeIcon icon={faList} />
                    <span>Projects</span>
                </div>
            </div>
        </div>
    )
}

export default Intro
