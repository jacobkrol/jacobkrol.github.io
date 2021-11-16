import React from 'react';
import '../../styles/ContactPage.css';

import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import ContentBlock from '../utilities/ContentBlock';
import Form from '../utilities/Form';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdPersonPinCircle } from 'react-icons/md';
import PhonesImg from '../../graphics/rotary-phones-1280.jpg';

function ContactPage() {
    return (
        <div>
            <Backdrop imgName={PhonesImg} />
            <TitleCard title="Contact Me" subtitle="Let's Keep in Touch!" size={66} />
            <ContentBlock bg={0}>
                <div id="contact-row" className="content-row">
                    <div className="content-column">
                        <AiFillGithub title="Github" color="rgb(40,40,40)" />

                        <a href="https://github.com/jacobkrol" target="_blank" rel="noopener noreferrer">./jacobkrol</a>
                    </div>
                    <div className="content-column">
                        <AiFillLinkedin title="linkedin" color="rgb(2,116,179)" />
                        <a href="https://linkedin.com/in/JacobSKrol" target="_blank" rel="noopener noreferrer">Jacob S Krol</a>
                    </div>
                    <div className="content-column">
                        <MdPersonPinCircle title="location" color="rgb(210,63,64)" />
                        <p>Madison, WI</p>
                    </div>
                </div>
                <div id="form-box">
                    <div className="content-box">
                        <p>If you have any feedback on this website (or any of my apps), are a recruiter looking for a fun, ambitious coder to add to your team, or have any other questions / comments, please message me on LinkedIn or send me an email using the form below!</p>
                    </div>
                    <Form />
                    <div className="content-box">
                        <p>I look forward to speaking to you soon!</p>
                    </div>
                </div>
            </ContentBlock>
        </div>
    )
}

export default ContactPage;
