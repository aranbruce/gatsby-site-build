import React from 'react'
import {Link} from 'gatsby'
import DynamoImage from '../images/work--dynamo.svg'
import CitySnappImage from '../images/work--citysnapp.svg'
import KoodooImage from '../images/work--koodoo.svg'
import CertiusImage from '../images/work--certius.svg'

const WorkSection = () => {
    return (
        <section className='section--grey' id={'work'}>
            <div className='section__content no-padding-bottom'>
                <div className='section__title'>
                    <h5>Some of</h5>
                    <h2>My Work</h2>
                </div>
            </div>
            <div className='section__content no-padding-top flex--wrap'>
                <div className='work-item'>
                    <Link to="/dynamo">
                        <img src={DynamoImage} alt='Dynamo'/>
                        <h3>Dynamo</h3>
                        <h5>View Project</h5>
                    </Link>
                </div>
                <div className='work-item'>
                    <Link to="/citysnapp">
                        <img src={CitySnappImage} alt='CitySnapp'/>
                        <h3>CitySnapp</h3>
                        <h5>View Project</h5>
                    </Link>
                </div>
                <div className='work-item'>
                    <Link to="/koodoo">
                        <img src={KoodooImage} alt='Koodoo'/>
                        <h3>Koodoo</h3>
                        <h5>View Project</h5>
                    </Link>
                </div>
                <div className='work-item'>
                    <Link to="/certius">
                        <img src={CertiusImage} alt='Certius'/>
                        <h3>Certius</h3>
                        <h5>View Project</h5>
                    </Link>
                </div>
            </div>
        </section>   
    )
}

export default WorkSection