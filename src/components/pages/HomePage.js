import React from 'react';
import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import CornerImg from '../utilities/CornerImg';
import ContentBlock from '../utilities/ContentBlock';

import UICImg from '../../graphics/chicago-uic-small-3.jpg';
import PortraitImg from '../../graphics/jacob-3.jpg';
import NameTag from '../utilities/NameTag';

function HomePage() {
    return (
        <div>
            <Backdrop imgName={UICImg} />
            <TitleCard Icon={NameTag} subtitle={["Full-Stack Web Developer","Short-Stack Pancake Lover"]} />
            <CornerImg />
            <ContentBlock key={0} bg={0} title="bio." >
                <div className="content-row">
                    <div className="content-box">
                        <img id="portrait" src={PortraitImg} alt="Jacob's Headshot" />
                    </div>
                    <div className="content-box">
                        <p>Hello! I am a software engineer with a focus in full-stack web development. I am passionate about bringing accessible, intuitive web apps to life through <a href="https://reactjs.org/docs/optimizing-performance.html">lightweight landing pages</a>, <a href="https://caniuse.com/">widely-supported CSS tools</a>, and <a href="https://reactjs.org">new frameworks like ReactJS</a>. And pancakes.</p>
                    </div>
                </div>
            </ContentBlock>
            <div className="content-row content-block-container">
                <ContentBlock key={1} bg={1} title="about." size="small">
                    <div className="content-column">
                        <div className="content-box">
                            <p>Read more on some things I'm passionate about. From extra-curriculars I participated in while in school, to activities I enjoy year-round, here is where you can learn about some of the things that make me tick.</p>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock key={2} bg={2} title="projects." size="small">
                    <div className="content-column">
                        <div className="content-box">
                            <p>Visit my projects page to browse a selection from some of my most recent, exciting projects. These range from academic to professional to personal, but each one has taught me a myriad of lessons on my road to completing them.</p>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock key={3} bg={3} title="resume." size="small">
                    <div className="content-column">
                        <div className="content-box">
                            <p>My resume page features many components from my resume, including a showcase of some of my front-end coding abilities. However, you'll have to reach out personally through my "contact" page for an updated PDF.</p>
                        </div>
                    </div>
                </ContentBlock>
            </div>
        </div>
    )
}

export default HomePage;
