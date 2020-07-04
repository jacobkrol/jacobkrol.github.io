import React from 'react';
import '../../styles/AboutPage.css';
import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import ContentBlock from '../utilities/ContentBlock';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaGlobeAmericas } from 'react-icons/fa';
import { MdDirectionsBike } from 'react-icons/md';
import { GiPublicSpeaker } from 'react-icons/gi';

import AFAGroup from '../../graphics/afa-group.jpg';

function AboutPage() {
    return (
        <div id="about">
            <Backdrop imgName={AFAGroup} />
            <TitleCard title="About Me" subtitle="Get a little glimpse into some things I love" size={66} />
            <div className="content-row content-block-container">
                <ContentBlock key={0} bg={0} title="coding." size="small">
                    <div className="content-column">
                        <FaLaptopCode title="laptop" />
                        <div className="content-box">
                            <p>In every language I've learned, I've found ways to use it for professional as well as creative means. I believe coders have a responsibility to leverage uniquely customizable programs to uplift others.</p>
                            <p>You can read more about just some of the projects I've made recently on my <Link to="/projects">projects page</Link>.</p>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock key={1} bg={1} title="cycling." size="small">
                    <div className="content-column">
                        <MdDirectionsBike title="bike" />
                        <div className="content-box">
                            <p>In addition to my love of team sports like baseball and tennis, which I have enjoyed for nearly my whole life, cycling captures an idiosyncratic love of mine for exploration, meditation, and exhiliration.</p>
                            <p>I have biked several 100+ mile trips, including my trek from my apartment in downtown Chicago up to Wisconsin and back. I challenge myself to one day, bike across an entire nation.</p>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock key={2} bg={2} title="speech." size="small">
                    <div className="content-column">
                        <GiPublicSpeaker title="orator" />
                        <div className="content-box">
                            <p>I participated in competitive speech tournaments for 6 years through high school and college. I still participate today through coaching and providing software aids to the community.</p>
                            <p>Actively practicing and competing in limited preparation and oratorical media have provided me not only valuable skills, but invaluable friends and experiences.</p>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock key={3} bg={3} title="travel." size="small">
                    <div className="content-column">
                        <FaGlobeAmericas title="globe" />
                        <div className="content-box">
                            <p>Exploring within my city, my country, and the world, brings me excitement and amazing learning opportunities.</p>
                            <p>I've visited 4 nations, half of the US states and D.C., and countless neighborhoods within my own city of Chicago, IL. This notably includes my summer spent abroad in Paris, where I worked in the social services and learned the culture better than through any other form.</p>
                        </div>
                    </div>
                </ContentBlock>
            </div>
        </div>
    )
}

export default AboutPage;
