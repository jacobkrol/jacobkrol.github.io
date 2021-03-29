import React from 'react';
import { IoMdTrophy } from 'react-icons/io';

import Backdrop from '../utilities/Backdrop';
import TitleCard from '../utilities/TitleCard';
import ContentBlock from '../utilities/ContentBlock';
import MediaCard from '../utilities/MediaCard';
import SkillColumn from '../utilities/SkillColumn.js';
import Skill from '../utilities/Skill';

import Code from '../../graphics/js-gibberish.png';
import Wikipedia from '../../graphics/trifolium-mechanism.gif';
import Efficiency from '../../graphics/disk-packing.gif';
import Magnetic from '../../graphics/waves-example.gif';
import Identification from '../../graphics/french-club-example.png';
import Fluorescence from '../../graphics/colab-photo.jpg';
import Uniqueness from  '../../graphics/cornell-paper-2.png';
import Representing from '../../graphics/uic-today-1.png';

import PapPoster from '../../graphics/pap-stem-poster.pdf';
import Capstone from '../../graphics/capstone-report.pdf';

function ResumePage() {
    return (
        <div>
            <Backdrop imgName={Code} overlayColor="" />
            <TitleCard title="Resume" subtitle="Contact me for the newest, print-friendly version!" size={66} />
            <ContentBlock bg={2} title="skills.">
                <div className="content-row flex-start">

                    <div className="content-row">
                    <SkillColumn title="languages">
                        <Skill name="C#" stars={5} />
                        <Skill name="JS ES6" stars={5} />
                        <Skill name="HTML5" stars={5} />
                        <Skill name="CSS3" stars={5} />
                        <Skill name="Python" stars={4} />
                        <Skill name="C++" stars={4} />
                    </SkillColumn>
                    <SkillColumn title="libs &amp; more">
                        <Skill name=".NET" stars={5} />
                        <Skill name="MassTransit" stars={5} />
                        <Skill name="React.js" stars={5} />
                        <Skill name="Node.js" stars={5} />
                        <Skill name="jQuery" stars={5} />
                        <Skill name="Express" stars={5} />
                    </SkillColumn>
                    </div>

                    <div className="content-row">
                    <SkillColumn title="data management">
                        <Skill name="PostgreSQL" stars={5} />
                        <Skill name="Redis Cache" stars={4} />
                        <Skill name="MySQL" stars={4} />
                        <Skill name="SQLite" stars={4} />
                        <Skill name="CosmosDB" stars={4} />
                        <Skill name="DynamoDB" stars={2} />
                    </SkillColumn>
                    <SkillColumn title="software">
                        <Skill name="M. Office" stars={5} />
                        <Skill name="VS Code" stars={5} />
                        <Skill name="Git" stars={5} />
                        <Skill name="Azure" stars={5} />
                        <Skill name="AWS" stars={3} />
                        <Skill name="Docker" stars={2} />
                    </SkillColumn>
                    </div>

                    <div className="content-row">
                    <SkillColumn title="communication">
                        <div className="content-row">
                            <div className="content-box">
                                <div className="skill-box skill-text">
                                    <p>French</p>
                                    <ul>
                                        <li>BA in French and Francophone Studies</li>
                                        <li>Professional Working Proficiency <span className="nobr">(ILR Scale)</span></li>
                                        <li>C1 on CEFR</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="skill-box skill-text">
                                    <p>Public Speaking</p>
                                    <ul>
                                        <li>Current competitive speech team coach at the collegiate level</li>
                                        <li>Former competitor on a nationally-ranked speech team <span className="nobr">(4 years)</span></li>
                                        <li>Limited preparation specialty</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="content-box">
                                <div className="skill-box skill-text">
                                    <p>Cross-Functional Communication</p>
                                    <ul>
                                        <li>Experience in translating between business and technology teams</li>
                                        <li>Communication of infrastructure and time requirements with story point estimation to management and other stakeholders</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </SkillColumn>
                    </div>

                </div>
            </ContentBlock>
            <ContentBlock bg={3} title="experience.">
            <div className="content-row">
                    <div className="content-box left-small-card">
                        <p>Tata Consultancy Services Ltd.</p>
                        <p>Chicago, IL</p>
                        <p>August 2020 - Present</p>
                    </div>

                    <div className="content-box right-large-card stretch-box">
                        <p>Software Engineer</p>
                        <ul>
                            <li>Contribute to the test-driven development through CI/CD to Azure serverless back-end microservices built with C# in the .NET framework</li>
                            <li>Coordinate virtually with on-shore and off-shore scrum team members to ensure effective utilization of client resources</li>
                            <li>Design message architecture using Google Protobuf and POCO messages with serialization and deserialization sent via MassTransit</li>
                        </ul>
                    </div>

                </div>

                <div className="content-row">
                    <div className="content-box left-small-card">
                        <p>Wolcott, Wood, and Taylor Inc.</p>
                        <p>Chicago, IL</p>
                        <p>June 2017 - April 2020</p>
                    </div>

                    <div className="content-box right-large-card stretch-box">
                        <p>Charge Entry Specialist, Insurance Verification Specialist</p>
                        <ul>
                            <li>Trained in both departments to assist based on office deadlines and needs</li>
                            <li>Oversee the entry and review of over $2,000,000 worth of patient visits monthly</li>
                            <li>Perform month-over-month at 210% of the charge entry department average productivity output</li>
                        </ul>
                    </div>

                </div>

                <div className="content-row">
                    <div className="content-box left-small-card">
                        <p>L'Espace Parisien Pour l'Insertion</p>
                        <p>Paris, France</p>
                        <p>June 2019 - July 2019</p>
                    </div>

                    <div className="content-box right-large-card stretch-box">
                        <p>Intern through CEA Study Abroad</p>
                        <ul>
                            <li>Communicate exclusively in French to coworkers, clients, and other organizations</li>
                            <li>Research improvement of social aid distribution networks through computer models</li>
                            <li>Cooperate with individuals of economically- and socially-disadvantaged groups to provide resources to improve quality of life</li>
                        </ul>
                    </div>

                </div>

                <div className="content-row">

                    <div className="content-box left-small-card">
                        <p>University of Illinois at Chicago</p>
                        <p>Chicago, IL</p>
                        <p>Spring 2017, Fall 2018</p>
                    </div>

                    <div className="content-box right-large-card stretch-box">
                        <p>Teaching Aide</p>
                        <ul>
                            <li>Create answer keys, rubrics, and determine point allocation independently</li>
                            <li>Grade and comment over 300 calculus student quizzes weekly</li>
                            <li>Develop time-allocation along own schedule to complete the work</li>
                        </ul>
                    </div>

                </div>
            </ContentBlock>
            <div className="content-row content-block-container">
                <ContentBlock bg={0} title="education." size="medium">
                    <div className="content-row">
                        <div className="content-box left-small-card">
                            <p>University of Illinois at Chicago</p>
                            <p>Chicago, IL</p>
                        </div>

                        <div className="content-box right-large-card">
                            <p>BS in Mathematics and Computer Science</p>
                            <p>BA in French and Francophone Studies</p>
                            <ul>
                                <li>President's Award Program STEM</li>
                                <li>Honors College, <em>magna cum laude</em></li>
                            </ul>
                            <p>CUMULATIVE GPA 3.8</p>
                            <p>MAJOR GPA 4.0</p>
                        </div>
                    </div>
                </ContentBlock>
                <ContentBlock bg={1} title="awards." size="medium">
                    <div className="content-box">
                        <div className="spaced-ul">
                            <span className="content-row"><IoMdTrophy className="bullet-icon" title="bullet point" /><p>Marie-Odile Sweetser Prize, <em>Department of French and Francophone Studies</em></p></span>
                            <span className="content-row"><IoMdTrophy className="bullet-icon" title="bullet point" /><p>Twersky Award Nominee, <em>Department of Mathematics, Statistics, and Computer Science</em></p></span>
                            <span className="content-row"><IoMdTrophy className="bullet-icon" title="bullet point" /><p>Illinois State Scholar, <em>Illinois Student Assistance Commission</em></p></span>
                            <span className="content-row"><IoMdTrophy className="bullet-icon" title="bullet point" /><p>Impact Scholar, <em>Center for Student Involvement</em></p></span>
                            <span className="content-row"><IoMdTrophy className="bullet-icon" title="bullet point" /><p>Dean’s List, <em>College of Liberal Arts & Sciences</em></p></span>
                        </div>
                    </div>
                </ContentBlock>
            </div>
            <ContentBlock bg={0} title="publications.">
                <div className="content-row">
                    <MediaCard date="November 13, 2019" title="On uniqueness and helicity conservation of weak solutions to the electron-MHD system" subtitle="Cornell University" link="https://arxiv.org/abs/1911.08285" imgName={Uniqueness} />
                    <MediaCard date="March 18, 2019" title="Representing UIC well in regular season, ready for nationals" subtitle="UIC Today" link="https://today.uic.edu/representing-uic-well-in-regular-season-ready-for-nationals" imgName={Representing} />
                </div>
            </ContentBlock>
            <ContentBlock bg={1} title="presentations.">
                <div className="content-row">
                    <MediaCard title="The Identification and Aid of Organizations through Web Presence" subtitle="UIC Honors College Presentation Expo" location="Chicago, IL" link={Capstone} date='December 10, 2019' imgName={Identification} />
                    <MediaCard title="Magnetic Waves" subtitle="UIC Mathematical Computing Lab Poster Session" location="Chicago, IL" link="https://github.com/jacobkrol/Magnetic-Waves" date='December 4, 2019' imgName={Magnetic} />
                    <MediaCard title="Efficiency of Planar Disk Packings" subtitle="MAA Joint Mathematics Meetings" location="Baltimore, MD" link="https://www.maa.org/sites/default/files/Programs/%28Final%29%20JMM%202019%20Student%20Poster%20Booklet.pdf" date='January 19, 2019' imgName={Efficiency} />
                    <MediaCard title="Efficiency of Planar Disk Packings" subtitle="UIC Mathematical Computing Lab Poster Session" location="Chicago, IL" link="http://mcl.math.uic.edu/fall-2018-projects" date='December 5, 2018' imgName={Efficiency} />
                    <MediaCard title="Efficiency of Planar Disk Packings" subtitle="Undergraduate Mathematics Symposium" location="Chicago, IL" link="https://github.com/jacobkrol/Planar-Disk-Packing" date='November 10, 2018' imgName={Efficiency} />
                    <MediaCard title="Efficiency of Planar Disk Packings" subtitle="UIC Mathematical Computing Lab Poster Session" location="Chicago, IL" link="http://mcl.math.uic.edu/spring-2018-projects" date='May 2, 2018' imgName={Efficiency} />
                    <MediaCard title="Wikipedia Illustration Task Force" subtitle="UIC Mathematical Computing Lab Poster Session" location="Chicago, IL" link="http://mcl.math.uic.edu/fall-2017-projects" date='December 6, 2017' imgName={Wikipedia} />
                    <MediaCard title="Studying Fluorescence of Coumarin 102 after NaOH Quenching" subtitle="PAP STEM Co-Lab Poster Presentation" location="Chicago, IL" link={PapPoster} date="July 29, 2016" imgName={Fluorescence} theme='dark' />
                </div>
            </ContentBlock>
        </div>
    )
}

export default ResumePage;
